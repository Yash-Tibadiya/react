import { forwardRef, Ref, useImperativeHandle, useRef } from "react";

export type TextInputRef = {
  reset: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TextInputProps {}

const TextInput = (props: TextInputProps, ref: Ref<TextInputRef>) => {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (!localRef.current) return;

      localRef.current.value = "";
      localRef.current.focus();
    },
  }));

  return <input type="text" ref={localRef} style={{ padding: "10px" }}/>;
};

export default forwardRef(TextInput);
