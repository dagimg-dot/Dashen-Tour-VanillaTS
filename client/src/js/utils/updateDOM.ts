const createVirtualDOM = (content) => {
  const range = document.createRange();
  return range.createContextualFragment(content);
};

const getElementFromDOM = (id) => {
  return document.getElementById(id);
};

const updateDOM = (elements, vDomStr) => {
  const { reactiveElements } = elements;
  const vDOM = createVirtualDOM(vDomStr);

  const refs = Object.keys(reactiveElements);

  refs.forEach((ref) => {
    const vDomEl = vDOM.getElementById(ref);
    let DomEl = reactiveElements[ref];

    if (Object.keys(reactiveElements[ref]).includes("event")) {
      DomEl.el = getElementFromDOM(ref);
      // if (!vDomEl.isEqualNode(DomEl.el)) {
      //   DomEl.el.innerHTML = vDomEl.innerHTML;
      // }

      if (vDomEl.getAttribute("class") !== DomEl.el.getAttribute("class")) {
        DomEl.el.setAttribute("class", vDomEl.getAttribute("class"));
      }
      const event = `on${DomEl.event}`;
      DomEl.el[event] = DomEl.cb;
    } else {
      DomEl = getElementFromDOM(ref);
      if (!vDomEl.isEqualNode(DomEl)) {
        DomEl.innerHTML = vDomEl.innerHTML;
      }
      if (vDomEl.getAttribute("class") !== DomEl.getAttribute("class")) {
        DomEl.setAttribute("class", vDomEl.getAttribute("class"));
      }
    }
  });
};
export default updateDOM;
