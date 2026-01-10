'use client';

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";

type ImageUploaderProps = {
    disabled?: boolean;
};

export function ImageUploader({ disabled = false }: ImageUploaderProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, startTransition] = useTransition();
    const [imgUrl, setImgUrl] = useState<string>('');

    function handleChooseFile() {
        toast.dismiss();
        if (!fileInputRef.current) return;
        fileInputRef.current.click();
    }
    function handleChange() {
        const fileInput = fileInputRef.current;
        if (!fileInput) {
            setImgUrl('');
            return;
        }
        const file = fileInput.files?.[0];
        if (!file) {
            setImgUrl('');
            return;
        };
        if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
            toast.error(`Imagem muito grande, Máx.: ${IMAGE_UPLOAD_MAX_SIZE / 1024}KB`);
            fileInput.value = '';
            setImgUrl('');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        startTransition(async () => {
            const result = await uploadImageAction(formData);
            if (result.error) {
                toast.error(result.error);
                setImgUrl('');
                return;
            }
            toast.success('Imagem enviada!');
            setImgUrl(result.url);
        });
        fileInput.value = '';

    }
    return <div className='flex flex-col gap-4 py-4'>
        <Button
            type="button"
            className="self-start"
            onClick={handleChooseFile}
            disabled={isUploading || disabled}
        >
            <ImageUpIcon />
            Enviar uma imagem</Button>
        {!!imgUrl && (
            <div className="flex flex-col gap-4">
                <p>URL: {imgUrl}</p>
                {/* eslint-disable-next-line */}
                <img className="rounded-lg w-20" src={imgUrl} alt="Imagem enviada" />
            </div>
        )}
        <input onChange={handleChange} className='hidden' name='file' type='file' accept='image/*' ref={fileInputRef} disabled={isUploading || disabled} />
    </div>;
}
