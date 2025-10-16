'use client';

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";
type RootErrorPageProps = {
    error: Error,
    reset: () => void
}
export default function RootErrorPage({error}:RootErrorPageProps){
    useEffect(()=>{
        console.log(error)
    },[error])
    return <ErrorMessage
    pageTitle="Internal Server Error"
    contenteTitle="501"
    content="Ocorreu um erro do qual nossa aplicação não conseguiu se recuperrar. tente novamente mais tarde."/>
}
