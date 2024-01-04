import { EventFullElement, HTMLTemplateLiteral } from "../types/types";
import { isEventFull } from "./utilityFuncs";

const createVirtualDOM = (content: HTMLTemplateLiteral) => {
  const range = document.createRange();
  return range.createContextualFragment(content as string);
};

const getElementFromDOM = (id: string) => {
  return document.getElementById(id);
};

const updateDOM = (reactiveElements, vDomStr: HTMLTemplateLiteral) => {
  const vDOM = createVirtualDOM(vDomStr);

  const refs = Object.keys(reactiveElements);

  refs.forEach((ref) => {
    const vDomEl = vDOM.getElementById(ref) as HTMLElement;

    if (isEventFull(reactiveElements[ref])) {
      const DomEl: EventFullElement = reactiveElements[ref];
      DomEl.el = getElementFromDOM(ref) as HTMLElement;
      // if (!vDomEl.isEqualNode(DomEl.el)) {
      //   DomEl.el.innerHTML = vDomEl.innerHTML;
      // }

      if (vDomEl.getAttribute("class") !== DomEl.el.getAttribute("class")) {
        DomEl.el.setAttribute("class", vDomEl.getAttribute("class") as string);
      }
      const event = `on${DomEl.event}`;
      DomEl.el[event] = DomEl.cb;
    } else {
      const DomEl = getElementFromDOM(ref) as HTMLElement;
      if (!vDomEl.isEqualNode(DomEl)) {
        DomEl.innerHTML = vDomEl.innerHTML;
      }
      if (vDomEl.getAttribute("class") !== DomEl.getAttribute("class")) {
        DomEl.setAttribute("class", vDomEl.getAttribute("class") as string);
      }
    }
  });
};
export default updateDOM;
