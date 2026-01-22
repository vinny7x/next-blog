import { hashPassword } from "@/lib/login/manage-login";

(async()=>{
const suaSenha ='' //! NÃO ESQUECER DE APAGAR A SENHA DAQUI
const hashDaSuaSenhaEmBase64 = await hashPassword(suaSenha)

console.log(hashDaSuaSenhaEmBase64)
})()
