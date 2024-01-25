import Input from "../../components/Input";
import Default from "../../layouts/Default";

const NewDestination = () => {
  return (
    <Default>
      <div class="grid grid-cols-2 font-semibold">
        <div>
          <h1 class="text-main font-semibold text-xl mb-6">New Destination</h1>
          <form>
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
                <label>Destination Location</label>
                <Input placeholder="location" required />
              </div>
              <div class="flex flex-col gap-2">
                <label>Destination Images</label>
                <input type="file" />
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
