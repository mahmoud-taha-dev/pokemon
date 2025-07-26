import clsx from "clsx";

interface IPagination {
  changePage: (nextPage: number) => void;
  totalPages: number;
  page: number;
  limit: number;
}

export const Pagination = ({
  changePage,
  totalPages,
  page,
  limit,
}: IPagination) => {
  const handlePagination = () => {
    const buttons = [];

    const isShortList = totalPages <= 6;
    const isAtStart = page <= 3;
    const isAtEnd = page >= totalPages - 2;

    let start = 2;
    let end = totalPages - 1;

    if (!isShortList) {
      if (isAtStart) {
        end = 5;
      } else if (isAtEnd) {
        start = totalPages - 4;
      } else {
        start = page - 2;
        end = page + 2;
      }
    }

    start = Math.max(2, start);
    end = Math.min(totalPages - 1, end);

    if (start > 2) {
      buttons.push(
        <span key="start-ellipsis" className="hidden px-2 md:block">
          ...
        </span>,
      );
    }

    for (let i = start; i <= end; i++) {
      const isActive = page === i;
      buttons.push(
        <button
          key={`page-${i}`}
          type="button"
          onClick={() => changePage(i)}
          className={clsx(
            "hidden px-3 py-1 rounded border md:block",
            isActive
              ? "bg-gray-950 text-white border-gray-950"
              : "bg-white text-gray-950 border-gray-200 cursor-pointer",
          )}
        >
          {i}
        </button>,
      );
    }

    if (end < totalPages - 1) {
      buttons.push(
        <span key="end-ellipsis" className="hidden px-2 md:block">
          ...
        </span>,
      );
    }

    return buttons;
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
        <button
          key="prev"
          type="button"
          onClick={() => changePage(page - 1)}
          disabled={page <= 1}
          className="px-3 py-1 rounded border bg-white text-gray-950 border-gray-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          key="page-1"
          type="button"
          onClick={() => changePage(1)}
          className={clsx(
            "hidden px-3 py-1 rounded border md:block",
            page === 1
              ? "bg-gray-950 text-white border-gray-950"
              : "bg-white text-gray-950 border-gray-200 cursor-pointer",
          )}
        >
          1
        </button>
        {handlePagination()}
        {totalPages > 1 && (
          <button
            key={`page-${totalPages}`}
            type="button"
            onClick={() => changePage(totalPages)}
            className={clsx(
              "hidden px-3 py-1 rounded border md:block",
              page === totalPages
                ? "bg-gray-950 text-white border-gray-950"
                : "bg-white text-gray-950 border-gray-200 cursor-pointer",
            )}
          >
            {totalPages}
          </button>
        )}
        {totalPages > 1 && (
          <button
            key="next"
            type="button"
            disabled={page === totalPages}
            onClick={() => changePage(page + 1)}
            className="px-3 py-1 rounded border bg-white text-gray-950 border-gray-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        )}
      </div>
      <div className="text-center text-sm text-gray-600 mt-4">
        Page {page} of {totalPages} ({limit} Pokemon shown)
      </div>
    </div>
  );
};
