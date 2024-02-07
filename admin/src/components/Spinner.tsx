import "../css/spinner.css";

interface SpinnerProps {
  message?: string;
}

const SpinnerOne = () => {
  return <div class="loader"></div>;
};

const SpinnerTwo = (props: SpinnerProps) => {
  return (
    <div>
      <div class="lds-default absolute left-1/2 top-14 -translate-x-1/2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="text-center mt-14">{props.message}</div>
    </div>
  );
};

export { SpinnerOne, SpinnerTwo };
