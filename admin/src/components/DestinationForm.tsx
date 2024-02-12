import { Show, For, createSignal, createEffect, createMemo } from "solid-js";
import { DeleteIcon, UploadIcon } from "./Icons";
import Input from "./Input";
import toast from "solid-toast";
import createImage from "../primitives/createImage";
import { Destination } from "../types/types";
import Chip from "./Chip";
import { SpinnerThree } from "./Spinner";

interface DestinationFormProps {
  destinationInfo?: Destination;
}

const DestinationForm = ({ destinationInfo }: DestinationFormProps) => {
  const [isLoading, setLoading] = createSignal(false);
  const [error, SetError] = createSignal("");
  const [formData, setFormData] = createSignal({
    destinationName: destinationInfo?.name || "",
    destinationDescription: destinationInfo?.description || "",
    destinationLocation: destinationInfo?.location || "",
  });

  const flattenImageList = (imageList: { url: string }[]) => {
    if (!imageList) return [];
    const flattenList = imageList.map((image) => {
      return image.url;
    });

    return flattenList;
  };

  const [oldImages, setOldImages] = createSignal(
    flattenImageList(destinationInfo?.images!)
  );

  createEffect(() => {
    if (error() !== "") {
      toast.error(error());
    }

    console.log(oldImages().length);
  });

  if (destinationInfo?.destinationId) {
    console.log("Editing mode");
  }

  const {
    isUploading,
    handleImageUpload,
    destinationImages,
    setDestinationImages,
  } = createImage(oldImages().length);

  const allImages = createMemo(() => [...oldImages(), ...destinationImages()]);

  const handleChange = (event: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createDestination = async (formData: Destination) => {
    SetError("");
    setLoading(true);
    try {
      const res = await fetch("/api/destinations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      toast.success("Destination created successfully");
    } catch (error) {
      SetError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const updateDestination = async (formData: Destination) => {
    SetError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/destinations/${formData.destinationId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      toast.success("Destination updated successfully");
    } catch (error) {
      SetError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    const destinationFormData = {
      name: formData().destinationName,
      description: formData().destinationDescription,
      location: formData().destinationLocation,
      images: destinationImages().map((imageLink) => {
        return {
          url: imageLink,
        };
      }),
    };

    if (destinationInfo?.destinationId) {
      // Update
      await updateDestination({
        destinationId: destinationInfo.destinationId,
        ...destinationFormData,
      });
      setOldImages(allImages());
      setDestinationImages([]);
    } else {
      // Create
      await createDestination(destinationFormData);
    }
  };

  const isPersisted = (idx: number) => {
    return oldImages().length > idx;
  };

  const handleImageDelete = (idx: number, destinationImage: string) => {
    if (isPersisted(idx)) {
      // TODO: Delete an image backend functionality
    } else {
      const filteredImages = destinationImages().filter(
        (image) => image !== destinationImage
      );

      setDestinationImages(filteredImages);
    }
    console.log(idx);
    console.log(isPersisted(idx));
  };

  const applyHover = (element: HTMLDivElement) => {
    element.style.display = "flex";
  };

  const removeHover = (element: HTMLDivElement) => {
    element.style.display = "none";
  };

  const overlayRef: { [index: string]: HTMLDivElement | null } = {};

  allImages().map((_image, idx) => {
    overlayRef[idx] = null;
  });

  return (
    <div class="max-w-3xl mx-auto font-semibold">
      <div>
        <form class="flex flex-col" onsubmit={handleSubmit}>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
              <label>Destination Name</label>
              <Input
                name="destinationName"
                placeholder="name"
                required
                value={formData().destinationName}
                onchange={handleChange}
                autofocus
              />
            </div>
            <div class="flex flex-col gap-2">
              <label>Destination Description</label>
              <textarea
                cols="30"
                rows="4"
                name="destinationDescription"
                placeholder="description"
                class="border-2 border-main/60 text-main rounded-lg py-1 px-2 placeholder:text-main/60 focus:border-2 focus:border-main outline-none w-full bg-white"
                value={formData().destinationDescription}
                onchange={handleChange}
              ></textarea>
            </div>
            <div class="flex flex-col gap-2">
              <label>Destination Location (Nearest city)</label>
              <Input
                placeholder="location"
                name="destinationLocation"
                required
                value={formData().destinationLocation}
                onchange={handleChange}
              />
            </div>
            <div class="flex flex-col gap-4">
              <label>
                <div class="flex gap-2 items-center">
                  <span>Destination Images</span>
                  <Chip text={"Max: 6"} />
                  <Chip text={"Each < 2MB"} />
                  <Chip text={`Current: ${allImages().length}`} />
                </div>
              </label>
              <div class="flex flex-wrap gap-4">
                <Show when={isUploading()}>
                  <div class="bg-gray-200 w-32 h-32 rounded-lg flex justify-center items-center">
                    <SpinnerThree />
                  </div>
                </Show>
                <Show when={allImages().length > 0}>
                  <For each={allImages()}>
                    {(destinationImage, idx) => (
                      <div>
                        <div
                          class="absolute z-10 w-32 h-32 rounded-lg bg-slate-800/50 justify-center items-center hidden"
                          ref={overlayRef[idx()]!}
                          onmouseover={() =>
                            applyHover(overlayRef[idx().toString()]!)
                          }
                          onmouseout={() =>
                            removeHover(overlayRef[idx().toString()]!)
                          }
                        >
                          <button
                            type="button"
                            onclick={() =>
                              handleImageDelete(idx(), destinationImage)
                            }
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                        <img
                          crossOrigin="anonymous"
                          class=" w-32 h-32 rounded-lg relative"
                          src={destinationImage}
                          alt={`destination image for ${
                            formData().destinationName
                          }`}
                          data-index={idx()}
                          onmouseover={() =>
                            applyHover(overlayRef[idx().toString()]!)
                          }
                          onmouseout={() =>
                            removeHover(overlayRef[idx().toString()]!)
                          }
                        />
                      </div>
                    )}
                  </For>
                </Show>
                <label class="w-32 h-32 bg-gray-200 rounded-lg text-gray-500 flex flex-col items-center justify-center cursor-pointer">
                  <UploadIcon activeIcon="stroke-main" />
                  <span class="text-sm">Upload</span>
                  <input
                    type="file"
                    class="hidden"
                    onchange={handleImageUpload}
                  />
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="bg-main text-white rounded-lg px-4 py-2 hover:bg-main/90 mt-6"
          >
            {isLoading() ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DestinationForm;
