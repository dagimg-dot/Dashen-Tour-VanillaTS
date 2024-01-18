const isObject = (variable: unknown) => {
  return typeof variable === "object" && variable !== null;
};

const isEventFull = (variable: Object) => {
  return Object.keys(variable).includes("event");
};

const applyStickyNavBar = () => {
  const nav = document.querySelector(".nav-bar") as HTMLElement;

  const sticky = nav.offsetTop;

  const stickNavBar = () => {
    if (window.scrollY >= sticky) {
      nav.classList.add("sticky");
      nav.classList.remove("hidden");
    } else {
      nav.classList.remove("sticky");
      nav.classList.add("hidden");
    }
  };

  window.onscroll = () => stickNavBar();
};

export { isObject, isEventFull, applyStickyNavBar };
