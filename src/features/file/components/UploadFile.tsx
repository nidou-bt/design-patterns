import React, { forwardRef } from "react";
import Input from "./Input";

type Props = {
  onChange: (file: File) => void;
};

type Ref = HTMLInputElement;

const UploadFile = forwardRef<Ref, Props>(({ onChange }, ref) => {
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onChange(e.target.files[0]);
    }
  };

  return (
    <Input
      type="file"
      ref={ref}
      onChange={onChangeFile}
      className="fileInput"
      accept="image/*"
    />
  );
});

export default UploadFile;
