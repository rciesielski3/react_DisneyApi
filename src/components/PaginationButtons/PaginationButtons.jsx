import { PaginationWrapper, PageButton } from "./PaginationButtons.styles";

const PaginationButtons = ({ currentPage, totalPages, loadPage, theme }) => {
  const renderPageButtons = () => {
    const buttons = [];

    if (currentPage > 1) {
      buttons.push(
        <PageButton
          key="prev"
          onClick={() => loadPage(currentPage - 1)}
          theme={theme}
        >
          Prev
        </PageButton>
      );
    }

    for (let i = 1; i <= totalPages; i++) {
      if (
        totalPages === 1 ||
        i === 1 ||
        i === totalPages ||
        Math.abs(currentPage - i) <= 1
      ) {
        buttons.push(
          <PageButton
            key={i}
            onClick={() => loadPage(i)}
            isActive={currentPage === i}
            theme={theme}
          >
            {i}
          </PageButton>
        );
      } else if (Math.abs(currentPage - i) === 2) {
        buttons.push(
          <PageButton key={`ellipsis-${i}`} disabled theme={theme}>
            ...
          </PageButton>
        );
      }
    }

    if (currentPage < totalPages) {
      buttons.push(
        <PageButton
          key="next"
          onClick={() => loadPage(currentPage + 1)}
          theme={theme}
        >
          Next
        </PageButton>
      );
    }

    return buttons;
  };

  return <PaginationWrapper>{renderPageButtons()}</PaginationWrapper>;
};

export default PaginationButtons;
