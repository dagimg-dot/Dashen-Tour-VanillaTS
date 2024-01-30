import { Show, For, createSignal, createEffect, createMemo } from "solid-js";
import { UploadIcon } from "./Icons";
import Input from "./Input";
import toast from "solid-toast";
import createImage from "../primitives/createImage";
import { Destination } from "../types/types";

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
    const flattenList = imageList.map((image) => {
      return image.url;
    });

    return flattenList;
  };

  const [oldImages] = createSignal(flattenImageList(destinationInfo?.images!));

  createEffect(() => {
    if (error() !== "") {
      toast.error(error());
    }
  });

  if (destinationInfo?.destinationId) {
    console.log("Editing mode");
  }

  const { isUploading, handleImageUpload, destinationImages } = createImage();

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
    } else {
      // Create
      await createDestination(destinationFormData);
    }
  };

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
            <div class="flex flex-col gap-2">
              <label>Destination Images (Max: 6, Each: {"<"} 2MB )</label>
              <div class="flex flex-wrap gap-4">
                <Show when={isUploading()}>
                  <div class="bg-gray-200 w-32 h-32 rounded-lg flex justify-center items-center">
                    Uploading...
                  </div>
                </Show>
                <Show when={allImages().length > 0}>
                  <For each={allImages()}>
                    {(destinationImage, idx) => (
                      <div class="w-32 h-32 rounded-lg" data-index={idx()}>
                        <img
                          crossOrigin="anonymous"
                          class=" w-32 h-32 rounded-lg"
                          src={destinationImage}
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
