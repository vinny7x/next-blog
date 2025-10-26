import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findPostByIdAdmin = cache(
    async (id: string) => {
        return await postRepository.findById(id);
    }
);

export const FindAllPostsAdmin = cache(
    async () => {
        return await postRepository.findAll();
    }
);
