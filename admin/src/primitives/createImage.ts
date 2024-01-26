import { createSignal } from "solid-js";
import toast from "solid-toast";

const ALLOWED_IMAGE_TYPE = ["png", "jpg", "jpeg"];
const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

const createImage = () => {
  const [destinationImages, setDestinationImages] = createSignal<string[]>([]);
  const [isUploading, setIsUploading] = createSignal(false);
  const [error, setError] = createSignal("");

  const uploadImage = async (imageData: FormData) => {
    setIsUploading(true);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: imageData,
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error.message);

      setDestinationImages((prev) => [...prev, data.data.url as string]);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const validateImage = (file: File) => {
    if (file?.size! > MAX_IMAGE_SIZE) {
      setError("Fize size exceeded the limit");
      toast.error("Fize size exceeded the limit");
    }

    if (!ALLOWED_IMAGE_TYPE.includes(file?.name!.split(".").pop()!)) {
      setError("Invalid image extenstion");
      toast.error("Invalid image extenstion");
    }
  };

  const countImage = () => {
    return destinationImages().length;
  };

  const handleImageUpload = async (event: { target: HTMLInputElement }) => {
    if (countImage() < 6) {
      const files = event.target.files!;
      if (files!.length > 0) {
        validateImage(files.item(0)!);
        if (error() === "") {
          const imageData = new FormData();
          imageData.append("image", files[0]);

          await uploadImage(imageData);
        }
      }
    } else {
      toast.error("Number of images uploaded can not exceed the limit");
    }
  };

  return { isUploading, handleImageUpload, destinationImages };
};

export default createImage;
