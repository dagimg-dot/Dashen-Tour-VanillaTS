import App from "./App.js";

const root = document.getElementById("app");
const dynamicCss = document.getElementById("dynamic-css");

const coreElements = {
  rootEl: root,
  css: dynamicCss,
};

App(coreElements);
