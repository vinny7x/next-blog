import { postRepository } from "@/repositories/post"
import { notFound } from "next/navigation";
import { cache } from "react"

export const findAllPublicPostsCached = cache(
    async () => {
        return await postRepository.findAllPublic();
    }
)

export const findPostBySlugCached = cache(
  async (slug: string) => {
    try {
      const post = await postRepository.findBySlug(slug);
      if (!post) {
        console.error(`[findPostBySlugCached] Post não encontrado: "${slug}"`);
        notFound();
      }
      return post;
    } catch (err) {
      console.error(`[findPostBySlugCached] Erro ao buscar post "${slug}":`, err);
      notFound();
    }
  }
);

export const findPostByIdCached = cache(
    async (id: string) => {
        return await postRepository.findById(id);
    }
)
