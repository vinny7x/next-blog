'use server';

import { revalidateTag } from "next/cache";

export async function revalidateExempleAction() {
    revalidateTag('posts'); //home
    revalidateTag(`post-rotina-matinal-de-pessoas-altamente-eficazes`);
}
