import { ChangeEvent } from "react";

interface ITextarea {
  onDesChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name:string
  value:string
}

const TextArea = ({ onDesChange ,name ,value}: ITextarea) => {
  // const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   onDesChange(e.target.value);
  // };
  return (
    <>
      {" "}
      <textarea
         onChange={onDesChange}
         name={name}
         value={value}
        className="text-slate-700 w-[80%]   focus:border-amber-400 p-2 rounded m-4"
      ></textarea>
    </>
  );
};

export default TextArea;
