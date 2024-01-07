import { CoreElements } from "./types/types";

import App from "./App";

const root = document.getElementById("root") as HTMLDivElement;
const dynamicTitle = document.getElementById(
  "dynamic-title"
) as HTMLTitleElement;

const coreElements: CoreElements = {
  root,
  title: dynamicTitle,
};

App(coreElements);
