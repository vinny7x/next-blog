'use client';

import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";

export function ManagePostForm() {
    const [contentValue, setContenteValue] = useState('');

    return <form action='' className='mb-16'>
        <div className='flex flex-col gap-6'>
            <InputText
                labelText='ID'
                name="id"
                placeholder='ID gerado automaticamente'
                type='text'
                defaultValue={''}
                readOnly
            />
            <InputText
                labelText='Slug'
                name="slug"
                placeholder='Slug gerada automaticamente'
                type='text'
                defaultValue={''}
                readOnly
            />
            <InputText
                labelText='Autor'
                name="author"
                placeholder='Digite o nome do autor'
                type='text'
                defaultValue={''}
            />
            <InputText
                labelText='Título'
                name="title"
                placeholder='Digite o título'
                type='text'
                defaultValue={''}
            />
            <InputText
                labelText='Excerto'
                name="excerpt"
                placeholder='Digite o resumo'
                type='text'
                defaultValue={''}
            />
            <MarkdownEditor
                labelText="Conteúdo"
                value={contentValue}
                setValue={setContenteValue}
                textAreaName="content" />
            <ImageUploader />
            <InputText
                labelText='URL da imagem de capa'
                name="coverImageUrl"
                placeholder='Insira a url da imagem de capa'
                type='text'
                defaultValue={''}
            />
            <InputCheckbox
                labelText='Publicar?'
                name="published"
                placeholder='Insira a url da imagem de capa'
                type='checkbox'
            />
        </div>
    </form>;
}
