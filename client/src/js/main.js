import App from "./App.js";

const root = document.getElementById("root");
const dynamicCss = document.getElementById("dynamic-css");
const dynamicTitle = document.getElementById("dynamic-title");

const coreElements = {
  root,
  css: dynamicCss,
  title: dynamicTitle,
};

App(coreElements);
