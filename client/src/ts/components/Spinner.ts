import "../../css/components/spinner.css";
import { HTMLTemplateLiteral } from "../types/types";

const Spinner = (): HTMLTemplateLiteral => {
  const template = `
        <div class="loader"></div>
    `;

  const container = document.createElement("div");
  container.innerHTML = template;

  return container.innerHTML;
};

export default Spinner;
