import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import clsx from "clsx";

type RootLayoutProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: {
        default: 'The blog - este é um blog com Next.js',
        template: '%s | The blog'
    },
    description: "Este é um blog feito com Next.js",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="pt-BR">
            <body>
                <Container>
                    <Header />
                    {children}
                    <footer>
                        <p className={clsx(
                            'text-6xl font-bold text-center',
                            'py-8'
                        )}>footer</p>
                    </footer>
                </Container>
            </body>
        </html>
    );
}
