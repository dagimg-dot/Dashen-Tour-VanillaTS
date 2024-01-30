import { Show, createResource } from "solid-js";
import Default from "../../layouts/Default";
import { useLocation } from "@solidjs/router";
import { Destination } from "../../types/types";
import { Toaster } from "solid-toast";
import DestinationForm from "../../components/DestinationForm";

const getDestinationId = (pathName: string) => {
  return +pathName.split("/").pop()!;
};

const fetchDestination = async (id: number) => {
  const res = await fetch(`/api/destinations/${id}`);
  const data = await res.json();
  return data.data;
};

const EditDestination = () => {
  const { pathname } = useLocation();
  const id = getDestinationId(pathname);
  const [destination] = createResource<Destination>(() => fetchDestination(id));

  return (
    <Default>
      <Toaster />
      <h1 class="text-main text-center font-semibold text-xl mb-6">
        Edit Destination
      </h1>
      <Show when={!destination.loading} fallback={"loading..."}>
        <DestinationForm destinationInfo={destination()} />
      </Show>
    </Default>
  );
};

export default EditDestination;