import SideNavigation from "../../components/SideNavigation";
import { A } from "@solidjs/router";

const Destinations = () => {
  return (
    <div class="bg-main min-h-screen flex">
      <SideNavigation />
      <div class="bg-white flex-grow m-2 ml-0 rounded-lg">
        <A href="/destinations/new">Add new destination</A>
      </div>
    </div>
  );
};

export default Destinations;
