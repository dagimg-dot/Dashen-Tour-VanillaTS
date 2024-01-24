import { A, useLocation } from "@solidjs/router";
import NavElement from "./NavElement";
import { CompanyLogoIcon, DashBoardIcon } from "./Icons";

const SideNavigation = () => {
  const { pathname } = useLocation();
  const activeLink = "bg-white text-main rounded-l-lg";

  return (
    <aside class="text-white">
      <A href="/" class="flex gap-2 items-center p-3 mb-4">
        <CompanyLogoIcon />
        <span class="font-bold text-lg">Dashen Tour Admin</span>
      </A>
      <nav class="flex flex-col gap-4 p-3 pr-0">
        <NavElement
          href="/"
          icon={
            <DashBoardIcon
              isActive={pathname === "/"}
              activeIcon={"fill-main"}
            />
          }
          name="Dashboard"
          activeClass={pathname === "/" ? activeLink : ""}
        />
        <NavElement
          href="/destinations"
          icon={
            <DashBoardIcon
              isActive={pathname.includes("/destinations")}
              activeIcon={"fill-main"}
            />
          }
          name="Destinations"
          activeClass={activeLink}
        />
        <NavElement
          href="/packages"
          icon={
            <DashBoardIcon
              isActive={pathname === "/packages"}
              activeIcon={"fill-main"}
            />
          }
          name="Packages"
          activeClass={activeLink}
        />
        <NavElement
          href="/messages"
          icon={
            <DashBoardIcon
              isActive={pathname === "/messages"}
              activeIcon={"fill-main"}
            />
          }
          name="Messages"
          activeClass={activeLink}
        />
        <NavElement
          href="/admins"
          icon={
            <DashBoardIcon
              isActive={pathname === "/admins"}
              activeIcon={"fill-main"}
            />
          }
          name="Admins"
          activeClass={activeLink}
        />
      </nav>
    </aside>
  );
};

export default SideNavigation;
