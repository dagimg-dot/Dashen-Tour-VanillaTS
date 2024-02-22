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

const cstyle = (
  varToCheck: unknown,
  condition: string,
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

export {
  isObject,
  isEventFull,
  applyStickyNavBar,
  cstyle,
  scrollToTop,
  iterator,
};
