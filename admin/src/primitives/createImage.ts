import { Accessor, createEffect, createSignal } from "solid-js";
import toast from "solid-toast";

const ALLOWED_IMAGE_TYPE = ["png", "jpg", "jpeg"];
const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

const createImage = (oldImages: Accessor<string[]>) => {
  const [destinationImages, setDestinationImages] = createSignal<string[]>([]);
  const [isUploading, setIsUploading] = createSignal(false);
  const [error, setError] = createSignal("");

  createEffect(() => {
    if (error() !== "") {
      toast.error(error());
    }
  });

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
      setError((error as Error).message);
    } finally {
      setIsUploading(false);
    }
  };

  const validateImage = (file: File) => {
    if (file?.size! > MAX_IMAGE_SIZE) {
      setError("Fize size exceeded the limit");
    }

    if (!ALLOWED_IMAGE_TYPE.includes(file?.name!.split(".").pop()!)) {
      setError("Invalid image extenstion");
    }
  };

  const countImage = () => {
    return oldImages().length + destinationImages().length;
  };

  const handleImageUpload = async (event: { target: HTMLInputElement }) => {
    setError("");
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

    //@ts-ignore
    // This resets the input element and triggers an event for every upload
    event.target.value = null;
  };

  return {
    isUploading,
    handleImageUpload,
    destinationImages,
    setDestinationImages,
  };
};

export default createImage;
