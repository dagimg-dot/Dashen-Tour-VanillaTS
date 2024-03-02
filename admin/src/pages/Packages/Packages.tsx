import toast, { Toaster } from "solid-toast";
import Default from "../../layouts/Default";
import { A } from "@solidjs/router";
import Button from "../../components/Button";
import { For, Show, createResource, createSignal } from "solid-js";
import { deletePackage, fetchPackages } from "../../api/package.api";
import { Package } from "../../types/types";
import Modal from "../../components/Modal";
import { SpinnerTwo } from "../../components/Spinner";

const Packages = () => {
  const [packages, { refetch }] = createResource<Package[]>(fetchPackages);
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [selectedPackage, setSelectedPackage] = createSignal<Package | null>(
    null
  );

  const handleDeleteClick = async (packageData: Package) => {
    setIsModalOpen(true);
    setSelectedPackage(packageData);
  };

  return (
    <Default>
      <Toaster />
      <A href="/packages/new">
        <Button name="Add new package" />
      </A>
      <div>
        <Show when={isModalOpen()}>
          <Modal
            message={`Are you sure you want to delete ${
              selectedPackage()?.name
            } ?`}
            onCancel={(): boolean => setIsModalOpen(false)}
            onConfirm={async () => {
              const data = await deletePackage(selectedPackage()?.packageId!);
              if (data) {
                toast.success(
                  `${selectedPackage()?.name} is deleted successfully`
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
          when={!packages.loading}
          fallback={<SpinnerTwo message="Loading packages" />}
        >
          <Show
            when={packages()!.length > 0}
            fallback={
              <div class="text-center text-lg mt-10 font-semibold">
                The package record is empty
              </div>
            }
          >
            <table class="custom-table mt-6">
              <thead>
                <tr class="text-lg font-semibold">
                  <td>Package Name</td>
                  <td>Featured</td>
                </tr>
              </thead>
              <tbody>
                <For each={packages()}>
                  {(packageData, _idx) => (
                    <tr>
                      <td>{packageData.name}</td>
                      <td>
                        {packageData.isFeatured ? (
                          <div class="bg-green-600 rounded-lg w-fit px-2 py-1 text-white">
                            Yes
                          </div>
                        ) : (
                          <div class="bg-red-600 rounded-lg w-fit px-2 py-1 text-white">
                            No
                          </div>
                        )}
                      </td>
                      <td>
                        <div class="flex gap-2 justify-center">
                          <A href={`/packages/${packageData.packageId}`}>
                            <Button name="Edit" />
                          </A>
                          <Button
                            name="Delete"
                            onClick={() => handleDeleteClick(packageData)}
                          />
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

export default Packages;
