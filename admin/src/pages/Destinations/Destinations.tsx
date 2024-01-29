import { A } from "@solidjs/router";
import Default from "../../layouts/Default";
import { For, Show, createResource } from "solid-js";

interface Destination {
  destinationId: number;
  name: string;
  description: string;
  location: string;
}

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
          <table class="custom-table mt-6">
            <thead>
              <tr>
                <td>Destination Name</td>
                <td>Location</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <For each={destinations()}>
                {(destination, _idx) => (
                  <tr>
                    <td>{destination.name}</td>
                    <td>{destination.location}</td>
                    <td>buttons</td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </Show>
      </div>
    </Default>
  );
};

export default Destinations;
