const createVirtualDOM = (content) => {
  const range = document.createRange();
  return range.createContextualFragment(content);
};

const updateDOM = (elements, vDomStr) => {
  const { ReactiveElements } = elements;
  const vDOM = createVirtualDOM(vDomStr);

  const refs = Object.keys(ReactiveElements);

  refs.forEach((ref) => {
    const vDomEl = vDOM.getElementById(ref);
    const DomEl = ReactiveElements[ref];

    if (Object.keys(ReactiveElements[ref]).includes("event")) {
      // if (!vDomEl.isEqualNode(DomEl.el)) {
      //   DomEl.el.innerHTML = vDomEl.innerHTML;
      // }

      if (vDomEl.getAttribute("class") !== DomEl.el.getAttribute("class")) {
        DomEl.el.setAttribute("class", vDomEl.getAttribute("class"));
      }
      console.log(DomEl);
    } else {
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
