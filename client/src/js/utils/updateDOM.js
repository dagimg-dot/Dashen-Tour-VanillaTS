const createVirtualDOM = (content) => {
  const range = document.createRange();
  return range.createContextualFragment(content);
};

const updateDOM = (stateFullElements, vDomStr) => {
  const vDOM = createVirtualDOM(vDomStr);

  const refs = Object.keys(stateFullElements);

  refs.forEach((ref) => {
    const vDomEl = vDOM.getElementById(ref);
    const DomEl = stateFullElements[ref];

    if (!vDomEl.isEqualNode(DomEl)) {
      DomEl.innerHTML = vDomEl.innerHTML;
    }
    if (vDomEl.getAttribute("class") !== DomEl.getAttribute("class")) {
      DomEl.setAttribute("class", vDomEl.getAttribute("class"));
    }
  });
};

export default updateDOM;
