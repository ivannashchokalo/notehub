"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import css from "./AvatarUploader.module.css";

interface AvatarUploaderProps {
  avatar?: string;
  onFileSelect: (file: File) => void;
}

export default function AvatarUploader({
  avatar,
  onFileSelect,
}: AvatarUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) return;

      // Create a temporary URL to display the selected image
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);

      onFileSelect(file);
    },
    [onFileSelect],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop,
  });

  return (
    <div {...getRootProps()} className={css.dropzone}>
      <input {...getInputProps()} />

      <Image
        src={preview || avatar!}
        alt="Avatar"
        width={120}
        height={120}
        className={css.avatar}
      />
    </div>
  );
}
