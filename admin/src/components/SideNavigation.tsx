import { A, useLocation } from "@solidjs/router";
import NavElement from "./NavElement";
import {
  AdminIcon,
  BookingIcon,
  CompanyLogoIcon,
  DashBoardIcon,
  DestinationIcon,
  MessageIcon,
  PackageIcon,
} from "./Icons";

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
              activeIcon={"stroke-main"}
            />
          }
          name="Dashboard"
          activeClass={pathname === "/" ? activeLink : ""}
        />
        <NavElement
          href="/destinations"
          icon={
            <DestinationIcon
              isActive={pathname.includes("/destinations")}
              activeIcon={"stroke-main"}
            />
          }
          name="Destinations"
          activeClass={activeLink}
        />
        <NavElement
          href="/packages"
          icon={
            <PackageIcon
              isActive={pathname === "/packages"}
              activeIcon={"stroke-main"}
            />
          }
          name="Packages"
          activeClass={activeLink}
        />
        <NavElement
          href="/packages"
          icon={
            <BookingIcon
              isActive={pathname === "/packages"}
              activeIcon={"fill-main"}
            />
          }
          name="Bookings"
          activeClass={activeLink}
        />
        <NavElement
          href="/messages"
          icon={
            <MessageIcon
              isActive={pathname === "/messages"}
              activeIcon={"stroke-main"}
            />
          }
          name="Messages"
          activeClass={activeLink}
        />
        <NavElement
          href="/admins"
          icon={
            <AdminIcon
              isActive={pathname === "/admins"}
              activeIcon={"stroke-main"}
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
