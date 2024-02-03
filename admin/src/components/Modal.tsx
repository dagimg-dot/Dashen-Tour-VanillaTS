import { Portal } from "solid-js/web";

interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = (props: ModalProps) => {
  return (
    <Portal>
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 shadow-slate-950 shadow-2xl rounded-lg bg-white flex flex-col p-4">
        <div class="text-center">{props.message}</div>
        <div class="flex justify-center mt-4 gap-4">
          <button
            class="bg-main text-white text-sm rounded-lg px-2 py-1 hover:bg-main/90"
            onclick={props.onConfirm}
          >
            Confirm
          </button>
          <button
            class="bg-white border-2 border-main text-main text-sm rounded-lg px-2 py-1"
            onclick={props.onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
