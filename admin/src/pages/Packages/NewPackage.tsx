import Default from "../../layouts/Default";
import { Toaster } from "solid-toast";
import PackageForm from "../../components/PackageForm";

const NewPackage = () => {
  return (
    <Default>
      <Toaster />
      <h1 class="text-main text-center font-semibold text-xl mb-6">
        New Package
      </h1>
      <PackageForm />
    </Default>
  );
};

export default NewPackage;
