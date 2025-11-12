'use client';

import { Button } from "@/components/Button";
import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    function handleChooseFile() {
        if (!fileInputRef.current) return;
        fileInputRef.current.click();
    }
    function handleChange() {
        const fileInput = fileInputRef.current;
        if (!fileInput) return;
        const file = fileInput.files?.[0];
        if (!file) return;
        if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
            toast.error(`Imagem muito grande, Máx.: ${IMAGE_UPLOADER_MAX_SIZE / 1024}KB`);
            fileInput.value = '';
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        // TODO: criar action para o envio de arquivos
        console.log(formData.get('file'));

        fileInput.value = '';

    }
    return <div className='flex flex-col gap-2 py-4'>
        <Button
            type="button"
            className="self-start"
            onClick={handleChooseFile}
        >
            <ImageUpIcon />
            Enviar uma imagem</Button>
        <input onChange={handleChange} className='hidden' name='file' type='file' accept='image/*' ref={fileInputRef} />
    </div>;
}
