import { Button as Btn } from "@headlessui/react";
import { MouseEventHandler } from "react";

export interface iButtonProps {
  children?: string | React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

const HButton = ({ children, onClick, className }: iButtonProps) => {
  return (
    <Btn
      onClick={onClick}
      className={`${className} inline-flex items-center justify-center min-w-4 gap-2 rounded-lg py-1.5 px-3 max-h-10 text-sm/6 font-semibold text-black font-medium shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white  transition duration-700 ease-in-out text-white/[87%] border-2 border-primary hover:text-black/[87%] hover:bg-primary hover:cursor-pointer`}
    >
      {children}
    </Btn>
  );
};

export default HButton;
