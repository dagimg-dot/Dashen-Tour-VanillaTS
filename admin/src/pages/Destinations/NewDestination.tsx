import { UploadIcon } from "../../components/Icons";
import Input from "../../components/Input";
import Default from "../../layouts/Default";

const NewDestination = () => {
  const uploadImage = async (imageData: FormData) => {
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: imageData,
    });

    const data = await res.json();
    console.log(data);
  };

  const handleImageUpload = async (event: { target: HTMLInputElement }) => {
    const ALLOWED_IMAGE_TYPE = ["png", "jpg", "jpeg"];
    const file = event.target.files!;
    if (file!.length > 0) {
      if (file.item(0)?.size! > 2 * 1024 * 1024) {
        console.log("Fize size exceeded the limit");
        return;
      }

      if (!ALLOWED_IMAGE_TYPE.includes(file.item(0)?.name!.split(".").pop()!)) {
        console.log("Invalid image extenstion");
        return;
      }

      const imageData = new FormData();
      // for (let i = 0; i < file.length; i++) {
      //   imageData.append("image", file.item(i));
      // }

      imageData.append("image", file);

      await uploadImage(imageData);
    }
  };

  return (
    <Default>
      <div class="max-w-3xl mx-auto font-semibold">
        <div>
          <h1 class="text-main text-center font-semibold text-xl mb-6">
            New Destination
          </h1>
          <form class="flex flex-col">
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-2">
                <label>Destination Name</label>
                <Input placeholder="name" required />
              </div>
              <div class="flex flex-col gap-2">
                <label>Destination Description</label>
                <textarea
                  cols="30"
                  rows="4"
                  placeholder="description"
                  class="border-2 border-main/60 text-main rounded-lg py-1 px-2 placeholder:text-main/60 focus:border-2 focus:border-main outline-none w-full bg-white"
                ></textarea>
              </div>
              <div class="flex flex-col gap-2">
                <label>Destination Location (Nearest city)</label>
                <Input placeholder="location" required />
              </div>
              <div class="flex flex-col gap-2">
                <label>Destination Images (Max: 6, Each: {"<"} 2MB )</label>
                <label class="w-24 h-24 bg-gray-200 rounded-lg text-gray-500 flex flex-col items-center justify-center cursor-pointer">
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
