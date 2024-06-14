import { ChangeEvent, useEffect, useRef } from "react";

interface IInput {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name:string
  value:string
}

const Input = ({ onInputChange,name ,value}: IInput) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onInputChange(e.target.value);
  // };

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        name= {name}
        value={value}
        className="text-slate-700 w-[80%]   focus:border-amber-400 p-2 rounded m-4"
        onChange={onInputChange}
      />
    </>
  );
};

export default Input;
