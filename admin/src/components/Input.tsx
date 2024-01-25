import { JSX } from "solid-js";

const Input = ({ ...attrs }: JSX.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      class="border-2 border-main/60 text-main rounded-lg py-1 px-2 placeholder:text-main/60 focus:border-2 focus:border-main outline-none w-full"
      {...attrs}
    />
  );
};

export default Input;
