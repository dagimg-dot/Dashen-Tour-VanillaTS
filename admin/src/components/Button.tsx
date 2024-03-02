interface ButtonProps {
  name: string;
  customStyle?: string;
  onClick?: () => void;
}

const Button = ({ name, onClick, customStyle }: ButtonProps) => {
  return (
    <button
      class={
        "bg-main text-white rounded-lg py-2 px-4 hover:bg-main/90" + customStyle
      }
      onclick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
