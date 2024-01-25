import { A } from "@solidjs/router";
import Default from "../../layouts/Default";

const Destinations = () => {
  return (
    <Default>
      {" "}
      <A href="/destinations/new">
        <button class="bg-main text-white rounded-lg px-2 py-2 hover:bg-main/90 ">
          Add new destination
        </button>
      </A>
    </Default>
  );
};

export default Destinations;
