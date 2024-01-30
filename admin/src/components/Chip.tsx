interface ChipProps {
  text: string | number;
}

const Chip = (props: ChipProps) => {
  return (
    <span class="bg-main/80 text-white px-2 py-1 rounded-lg text-sm">
      {props.text}
    </span>
  );
};

export default Chip;
