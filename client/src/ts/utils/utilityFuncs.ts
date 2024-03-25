const isObject = (variable: unknown) => {
  return typeof variable === "object" && variable !== null;
};

const isEventFull = (variable: Object) => {
  return Object.keys(variable).includes("event");
};

const applyStickyNavBar = () => {
  const nav = document.querySelector(".nav-bar") as HTMLElement;

  const sticky = nav.offsetTop;

  const stick = () => {
    if (window.scrollY >= sticky) {
      nav.classList.add("sticky");
      nav.classList.remove("hidden");
    } else {
      nav.classList.remove("sticky");
      nav.classList.add("hidden");
    }
  };

  return stick;
};

const applyToTopBtn = () => {
  const toTopBtn = document.getElementById("toTopBtn") as HTMLButtonElement;
  const offset = document.querySelector(".offset") as HTMLDivElement;

  const theOffset = offset.offsetTop;

  const stick = () => {
    if (window.scrollY > 250) {
      toTopBtn.classList.add("sticky-totop");
    } else {
      toTopBtn.classList.remove("sticky-totop");
    }

    if (window.scrollY >= theOffset - 580) {
      toTopBtn.style.position = "absolute";
    } else {
      toTopBtn.style.position = "fixed";
    }
  };

  return stick;
};

const applyScrollEvents = () => {
  const stickNavBar = applyStickyNavBar();
  const stickToTopBtn = applyToTopBtn();

  window.onscroll = () => {
    stickNavBar();
    stickToTopBtn();
  };
};

const cstyle = (
  varToCheck: unknown,
  condition: unknown,
  conditionAgnosticStyle: string,
  conditionalStyle: string
) => {
  const computedConditionalStyle =
    varToCheck === condition ? conditionalStyle : "";
  return conditionAgnosticStyle + " " + computedConditionalStyle;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const iterator = (range: number) => {
  const arr = [];

  for (let i = 0; i < range; i++) {
    arr.push(i);
  }

  return arr;
};

const getContainer = <T>(id: string) => {
  return document.getElementById(id) as T;
};

export {
  isObject,
  isEventFull,
  applyScrollEvents,
  cstyle,
  scrollToTop,
  iterator,
  getContainer,
};
