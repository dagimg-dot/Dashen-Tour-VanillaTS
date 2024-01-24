import { A } from "@solidjs/router";
import { JSXElement } from "solid-js";

type NavElementProps = {
  href: string;
  icon: JSXElement;
  name: string;
  activeClass: string;
};

const NavElement = ({ href, icon, name, activeClass }: NavElementProps) => {
  return (
    <A
      href={href}
      class="flex gap-2 items-center p-1"
      activeClass={activeClass}
    >
      {icon}
      {name}
    </A>
  );
};

export default NavElement;
