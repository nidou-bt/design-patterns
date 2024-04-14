import { ElementRef, InputHTMLAttributes, forwardRef } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;
type Ref = ElementRef<"input">;

const Input = forwardRef<Ref, Props>((Props, ref) => {
  return <input {...Props} ref={ref} />;
});

export default Input;
