import { Show, createResource } from "solid-js";
import Default from "../../layouts/Default";
import { useLocation } from "@solidjs/router";
import { Destination } from "../../types/types";
import { Toaster } from "solid-toast";
import DestinationForm from "../../components/DestinationForm";
import { fetchDestination } from "../../api/destination.api";

const getDestinationId = (pathName: string) => {
  return +pathName.split("/").pop()!;
};

const EditDestination = () => {
  const { pathname } = useLocation();
  const id = getDestinationId(pathname);
  const [destination] = createResource<Destination, number>(
    id,
    fetchDestination
  );

  return (
    <Default>
      <Toaster />
      <h1 class="text-main text-center font-semibold text-xl mb-6">
        Edit Destination
      </h1>
      <Show
        when={destination.error}
        fallback={
          <Show when={!destination.loading} fallback={"loading..."}>
            <DestinationForm destinationInfo={destination()} />
          </Show>
        }
      >
        <div class="text-center text-md mt-10 font-semibold text-red-600">
          😓 {destination.error.message}
        </div>
      </Show>
    </Default>
  );
};

export default EditDestination;
