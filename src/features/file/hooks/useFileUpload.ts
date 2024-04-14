import React, { useRef, useState } from "react";

const useFileUpload = () => {
  const [_, setFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (newFile: File) => {
    setFile(newFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFileUrl(reader.result as string);
    };
    reader.readAsDataURL(newFile);
  };

  const onOpen = () => {
    inputRef.current?.click();
  };

  const onClear = () => {
    setFile(undefined);
    setFileUrl("");
  };
  return { fileUrl, onChange, onOpen, onClear, inputRef };
};

export default useFileUpload;
