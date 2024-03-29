import { html } from "lit-html";
import "../../css/components/pagination.css";
import { ChevronLeft, ChevronRight } from "./Icons";
import { cstyle, iterator, scrollToTop } from "../utils/utilityFuncs";
import { DESTINATIONACTIONS } from "../types/destinationTypes";
import "../../css/components/icons.css"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const activePage = (condition: number) => {
    return cstyle(currentPage, condition, "page-btn", "active-page");
  };

  const template = html`<div class="pagination-container">
    <button class="icon-btn btn-left">${ChevronLeft}</button>
    ${iterator(totalPages).map((num) => {
      return html`<button class=${activePage(num + 1)} data-pageNum=${num + 1}>
        ${num + 1}
      </button>`;
    })}
    <button class="icon-btn btn-right">${ChevronRight}</button>
  </div>`;

  return template;
};

const PaginationController = (
  fetchDestWithQuery: Function,
  dispatch: (actionList: DESTINATIONACTIONS[]) => void
) => {
  const btnLeft = document.querySelector(".btn-left") as HTMLButtonElement;
  const btnRight = document.querySelector(".btn-right") as HTMLButtonElement;

  let currentPage = (
    document.querySelector(".active-page") as HTMLButtonElement
  ).dataset.pagenum as string;

  let pageBtns = document.querySelectorAll(
    ".page-btn"
  ) as unknown as HTMLButtonElement[];

  const runSideEffect = () => {
    pageBtns = document.querySelectorAll(
      ".page-btn"
    ) as unknown as HTMLButtonElement[];

    pageBtns.forEach((pageBtn) => {
      pageBtn.onclick = () => handlePageBtnClick(+pageBtn.dataset.pagenum!);
    });
  };

  const handleRightChevronClick = () => {
    runSideEffect();
    if (+currentPage == pageBtns.length) return;
    const newPageNumber = +currentPage + 1;
    dispatch([{ type: "SET_LOADING", payload: true }]);
    fetchDestWithQuery(newPageNumber);
    currentPage = newPageNumber.toString();
    scrollToTop();
  };

  const handleLeftChevronClick = () => {
    runSideEffect();
    if (+currentPage == 1) return;
    const newPageNumber = +currentPage - 1;
    dispatch([{ type: "SET_LOADING", payload: true }]);
    fetchDestWithQuery(newPageNumber);
    currentPage = newPageNumber.toString();
    scrollToTop();
  };

  const handlePageBtnClick = (clickedPageNum: number) => {
    runSideEffect();
    if (+currentPage == clickedPageNum) return;
    dispatch([{ type: "SET_LOADING", payload: true }]);
    fetchDestWithQuery(clickedPageNum);
    currentPage = clickedPageNum.toString();
    scrollToTop();
  };

  btnLeft.onclick = () => handleLeftChevronClick();
  btnRight.onclick = () => handleRightChevronClick();
  pageBtns.forEach((pageBtn) => {
    pageBtn.onclick = () => handlePageBtnClick(+pageBtn.dataset.pagenum!);
  });
};

export { Pagination, PaginationController };
