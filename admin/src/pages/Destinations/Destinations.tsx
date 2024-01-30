import { A } from "@solidjs/router";
import Default from "../../layouts/Default";
import { For, Show, createResource } from "solid-js";
import { Destination } from "../../types/types";

const fetchDestinations = async () => {
  const res = await fetch("/api/destinations");
  const data = await res.json();
  return data.data;
};

const Destinations = () => {
  const [destinations] = createResource<Destination[]>(fetchDestinations);

  return (
    <Default>
      {" "}
      <A href="/destinations/new">
        <button class="bg-main text-white rounded-lg px-2 py-2 hover:bg-main/90 ">
          Add new destination
        </button>
      </A>
      <div>
        <Show when={!destinations.loading} fallback={"loading ..."}>
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
                          <button class="bg-main text-white text-sm rounded-lg px-2 py-1 hover:bg-main/90 ">
                            <A
                              href={`/destinations/${destination.destinationId}`}
                            >
                              Edit
                            </A>
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
