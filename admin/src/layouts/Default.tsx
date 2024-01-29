import { JSX } from "solid-js";
import SideNavigation from "../components/SideNavigation";

type DefaultLayoutProps = {
  children: JSX.Element;
};

const Default = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <div class="bg-main h-screen flex">
        <SideNavigation />
        <div class="bg-white flex-grow m-2 ml-0 rounded-lg p-5 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Default;
