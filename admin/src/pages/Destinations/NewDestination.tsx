import { For, Show, createSignal } from "solid-js";
import { UploadIcon } from "../../components/Icons";
import Input from "../../components/Input";
import Default from "../../layouts/Default";
import createImage from "../../primitives/createImage";
import { Toaster } from "solid-toast";

const NewDestination = () => {
  const [formData, setFormData] = createSignal({
    destinationName: "",
    destinationDescription: "",
    destinationLocation: "",
  });

  const { isUploading, handleImageUpload, destinationImages } = createImage();

  const handleChange = (event: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    const destinationForm = {
      ...formData(),
      destinationImages: destinationImages(),
    };

    console.log(destinationForm);
  };

  return (
    <Default>
      <Toaster />
      <div class="max-w-3xl mx-auto font-semibold">
        <div>
          <h1 class="text-main text-center font-semibold text-xl mb-6">
            New Destination
          </h1>
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
                  <Show when={destinationImages().length > 0}>
                    <For each={destinationImages()}>
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
              Save
            </button>
          </form>
        </div>
      </div>
    </Default>
  );
};

export default NewDestination;
