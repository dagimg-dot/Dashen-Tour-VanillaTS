import Toast from "../components/Toast";

let toast: Toast | null;

const useToast = () => {
  if (!toast) {
    toast = new Toast();
  }

  return toast;
};

export default useToast;
