import { Show, createResource } from "solid-js";
import Default from "../../layouts/Default";
import { useLocation } from "@solidjs/router";
import { Package } from "../../types/types";
import { Toaster } from "solid-toast";
import PackageForm from "../../components/PackageForm";
import { fetchPackage } from "../../api/package.api";
import { SpinnerTwo } from "../../components/Spinner";

const getPackageId = (pathName: string) => {
  return +pathName.split("/").pop()!;
};

const EditPackage = () => {
  const { pathname } = useLocation();
  const id = getPackageId(pathname);
  const [packageInfo] = createResource<Package, number>(id, fetchPackage);

  return (
    <Default>
      <Toaster />
      <h1 class="text-main text-center font-semibold text-xl mb-6">
        Edit Package
      </h1>
      <Show
        when={packageInfo.error}
        fallback={
          <Show
            when={!packageInfo.loading}
            fallback={<SpinnerTwo message="Loading package" />}
          >
            <PackageForm packageInfo={packageInfo()} />
          </Show>
        }
      >
        <div class="text-center text-md mt-10 font-semibold text-red-600">
          😓 {packageInfo.error.message}
        </div>
      </Show>
    </Default>
  );
};

export default EditPackage;
