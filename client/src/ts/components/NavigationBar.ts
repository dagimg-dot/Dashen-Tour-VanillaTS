import { html } from "lit-html";
import "../../css/components/navigationbar.css";
import useAuth from "../hooks/useAuth";
import { noProfile } from "../../static";
import { logout } from "../api/auth.api";
import useRouter from "../hooks/useRouter";
import useToast from "../hooks/useToast";
import errorHandler from "../utils/errorHandler";
import useLocation from "../hooks/useLocation";
import { cstyle } from "../utils/utilityFuncs";
import { CompanyLogoIcon } from "./Icons";

const [authState, updateAuth] = useAuth();

const NavigationBar = () => {
  const { pathname } = useLocation();

  const activeNav = (condition: string) => {
    return cstyle(pathname, condition, "main-nav-link", "active-nav");
  };

  const template = html`<nav class="nav-bar container-p" id="navBar">
    <div>
      <a href="#/" class="nav-logo"> ${CompanyLogoIcon} </a>
    </div>
    <div>
      <nav class="main-nav secondary-nav">
        <ul class="main-nav-list">
          <li>
            <a href="#" class=${activeNav("/contact")}>Contact</a>
          </li>
          <li><a href="#" class=${activeNav("/packages")}>Packages</a></li>
          <li>
            <a href="#/destinations" class=${activeNav("/destinations")}>
              Destinations
            </a>
          </li>
          <li><a href="#" class=${activeNav("/booking")}>Booking</a></li>
          <li>
            ${authState().isAuthenticated
              ? html`
                  <div class="img-wrapper">
                    <img class="profile-image" src=${noProfile} />
                  </div>
                `
              : html`
                  <a href="#/login" class="main-nav-link btn btn-fill">Login</a>
                `}
          </li>
        </ul>
        <div class="drop-down-menu">
          <span><a href="#/">Profile</a></span>
          <span class="logout-btn">Logout</span>
        </div>
      </nav>
    </div>
  </nav>`;

  return template;
};

const NavigationBarController = () => {
  const dropDown = document.querySelector(".drop-down-menu") as HTMLDivElement;
  const toast = useToast();
  const router = useRouter();

  document.onclick = (event: MouseEvent) => {
    if ((event.target as HTMLElement).className === "profile-image") {
      dropDown.classList.toggle("show-animate");
    } else if ((event.target as HTMLSpanElement).className === "logout-btn") {
      logout()
        .then((response: Response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error) {
            const message = errorHandler(data.error);
            toast.showToast({ type: "ERROR", message: message });
            dropDown.classList.toggle("show-animate");
          } else {
            updateAuth({
              user: null,
              isAuthenticated: false,
            });
            toast.showToast({
              type: "SUCCESS",
              message: "You are logged out",
            });
            dropDown.classList.toggle("show-animate");
            if (router.getCurrentRoute()?.path === "/") {
              router.push("/", true);
            } else {
              router.push("/");
            }
          }
        })
        .catch((error: Error) => {
          toast.showToast({ type: "ERROR", message: error.message });
          dropDown.classList.toggle("show-animate");
        });
    } else if (dropDown.classList.contains("show-animate")) {
      dropDown.classList.toggle("show-animate");
    }
  };
};

export { NavigationBar, NavigationBarController };
