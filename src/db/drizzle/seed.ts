import { JsonPostRepository } from "@/repositories/post/json-post-repository"
import { drizzleDb } from "."
import { postsTable } from "./schemas"


(async () => {
    const jsonPostRepository = new JsonPostRepository()
    const posts = await jsonPostRepository.findAll()
    try {
        //! isso limpa a database!
        await drizzleDb.delete(postsTable)
        await drizzleDb.insert(postsTable).values(posts)

        console.log(`${posts.length} posts foram salvos na base de dados!`)
    } catch (e) {
        console.log('ocorreu em erro:\n\n', e)
    }
})()
