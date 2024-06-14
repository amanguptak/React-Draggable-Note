import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  onButtonSubmit: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ onButtonSubmit, children }: IButton) => {
  return (
    <>
      <button
        type="button"
        className="bg-amber-200 rounded px-6 font-semibold py-2 text-slate-800"
        onClick={onButtonSubmit}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
