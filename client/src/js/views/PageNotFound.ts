class PageNotFound {
  generateMarkup() {
    return `
        <div class="main-wrapper">
            <div class="main-message">
                <h1 class="status-code">404</h1>
                <span class="status-message">Page not found</span>
            </div>
        </div>
    `;
  }
}

export default new PageNotFound();
