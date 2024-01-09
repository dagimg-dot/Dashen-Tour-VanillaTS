import { html, render } from "lit-html";

class PageNotFound {
  renderView(root: HTMLDivElement) {
    render(
      html`
        <div class="main-wrapper">
          <div class="main-message">
            <h1 class="status-code">404</h1>
            <span class="status-message">Page not found</span>
          </div>
        </div>
      `,
      root
    );
  }
}

export default new PageNotFound();
