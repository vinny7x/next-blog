import ErrorMessage from "@/components/ErrorMessage";

export default function NotFoundPage() {
    return (
        <ErrorMessage
            pageTitle="Página não encontrada"
            contenteTitle="404"
            content="A página que você tentou acessar não foi encontrada."
        />
    );
}
