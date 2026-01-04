'use server';

import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { z } from "zod";
import { v4 as uuidV4 } from "uuid";
import { makeSlugFromText } from "@/utils/make-slug-from-text";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
type CreatePostActionState = {
    formState: PublicPost;
    errors: string[];
};

export async function createPostAction(
    prevState: CreatePostActionState,
    formData: FormData
): Promise<CreatePostActionState> {

    if (!(formData instanceof FormData)) {
        return {
            formState: prevState.formState,
            errors: ['Dados inválidos'],
        };
    }

    const formDatToObj = Object.fromEntries(formData.entries());
    const zodParsedObj = PostCreateSchema.safeParse(formDatToObj);

    if (!zodParsedObj.success) {
        const treeError = z.treeifyError(zodParsedObj.error);
        const errors = getZodErrorMessages(treeError);

        return {
            formState: makePartialPublicPost(formDatToObj),
            errors,
        };
    }

    const validPostData = zodParsedObj.data;
    const newPost: PostModel = {
        ...validPostData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        id: uuidV4(),
        slug: makeSlugFromText(validPostData.title)
    };
    //TODO: mover este metodo para o repositorio
    await drizzleDb.insert(postsTable).values(newPost);

    revalidateTag('posts');
    redirect(`/admin/post/${newPost.id}`);
}
