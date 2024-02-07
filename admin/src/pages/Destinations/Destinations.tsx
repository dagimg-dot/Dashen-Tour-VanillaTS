import { A } from "@solidjs/router";
import Default from "../../layouts/Default";
import { For, Show, createResource, createSignal } from "solid-js";
import { Destination } from "../../types/types";
import {
  deleteDestination,
  fetchDestinations,
} from "../../api/destination.api";
import toast, { Toaster } from "solid-toast";
import Modal from "../../components/Modal";
import { SpinnerTwo } from "../../components/Spinner";

const Destinations = () => {
  const [destinations, { refetch }] =
    createResource<Destination[]>(fetchDestinations);
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [selectedDestination, setSelectedDestination] =
    createSignal<Destination | null>(null);

  const handleDeleteClick = async (destination: Destination) => {
    setIsModalOpen(true);
    setSelectedDestination(destination);
  };

  return (
    <Default>
      <Toaster />{" "}
      <A href="/destinations/new">
        <button class="bg-main text-white rounded-lg px-2 py-2 hover:bg-main/90 ">
          Add new destination
        </button>
      </A>
      <div>
        <Show when={isModalOpen()}>
          <Modal
            message={`Are you sure you want to delete ${
              selectedDestination()?.name
            } ?`}
            onCancel={(): boolean => setIsModalOpen(false)}
            onConfirm={async () => {
              const data = await deleteDestination(
                selectedDestination()?.destinationId!
              );
              if (data) {
                toast.success(
                  `${selectedDestination()?.name} is deleted successfully`
                );
                refetch();
              } else {
                toast.error("Something went wrong");
              }
              setIsModalOpen(false);
            }}
          />
        </Show>
        <Show
          when={!destinations.loading}
          fallback={<SpinnerTwo message="Loading destinations" />}
        >
          <Show
            when={destinations()!.length > 0}
            fallback={
              <div class="text-center text-lg mt-10 font-semibold">
                The destination record is empty
              </div>
            }
          >
            <table class="custom-table mt-6">
              <thead>
                <tr>
                  <td class="text-lg font-semibold">Destination Name</td>
                  <td class="text-lg font-semibold">Location</td>
                </tr>
              </thead>
              <tbody>
                <For each={destinations()}>
                  {(destination, _idx) => (
                    <tr>
                      <td>{destination.name}</td>
                      <td>{destination.location}</td>
                      <td>
                        <div class="flex gap-2 justify-center">
                          <button class="bg-main text-white text-sm rounded-lg px-2 py-1 hover:bg-main/90">
                            <A
                              href={`/destinations/${destination.destinationId}`}
                            >
                              Edit
                            </A>
                          </button>
                          <button
                            class="bg-main text-white text-sm rounded-lg px-2 py-1 hover:bg-main/90"
                            onclick={() => handleDeleteClick(destination)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </Show>
        </Show>
      </div>
    </Default>
  );
};

export default Destinations;
