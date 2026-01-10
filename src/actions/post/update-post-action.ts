'use server';

import { makePartialPublicPost, makePublicPostFromDb, PublicPost } from "@/dto/post/dto";
import { PostUpdateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { z } from "zod";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { postRepository } from "@/repositories/post";
type UpdatePostActionState = {
    formState: PublicPost;
    errors: string[];
    success?: true;
};

export async function UpdatePostAction(
    prevState: UpdatePostActionState,
    formData: FormData
): Promise<UpdatePostActionState> {

    if (!(formData instanceof FormData)) {
        return {
            formState: prevState.formState,
            errors: ['Dados inválidos'],
        };
    }

    const id = formData.get('id')?.toString() || '';
    if (!id || typeof id !== 'string') {
        return {
            formState: prevState.formState,
            errors: ['ID inválido'],
        };
    }

    const formDatToObj = Object.fromEntries(formData.entries());
    const zodParsedObj = PostUpdateSchema.safeParse(formDatToObj);



    if (!zodParsedObj.success) {
        const treeError = z.treeifyError(zodParsedObj.error);
        const errors = getZodErrorMessages(treeError);

        return {
            formState: makePartialPublicPost(formDatToObj),
            errors,
        };
    }

    const validPostData = zodParsedObj.data;
    const newPost = {
        ...validPostData,
    };
    let post:PostModel;
    try {
        post = await postRepository.update(id, newPost);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return {
                formState: makePartialPublicPost(formDatToObj),
                errors: [e.message]
            };

        }
        return {
            formState: makePartialPublicPost(formDatToObj),
            errors: ['Erro desconhecido']
        };
    }
    revalidateTag('posts');
    redirect(`/admin/post/${post.slug}`);
    return {
        formState: makePublicPostFromDb(post),
        errors: [],
        success: true
    }
}
