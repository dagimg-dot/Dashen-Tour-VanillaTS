import Default from "../../layouts/Default";
import { Toaster } from "solid-toast";
import DestinationForm from "../../components/DestinationForm";

const NewDestination = () => {
  return (
    <Default>
      <Toaster />
      <h1 class="text-main text-center font-semibold text-xl mb-6">
        New Destination
      </h1>
      <DestinationForm />
    </Default>
  );
};

export default NewDestination;
