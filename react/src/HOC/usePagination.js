import * as React from "react";

function usePagination(data, itemPerPage) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const maxPage = Math.ceil(data.length / itemPerPage);

    function currentData() {
        const start = (currentPage - 1) * itemPerPage;
        const end = start + itemPerPage;
        return data.slice(start, end);
    }

    function prevPage() {
        setCurrentPage((currentPage) => { Math.max(1, currentPage - 1) });
    }

    function nextPage() {
        setCurrentPage((currentPage) => { Math.min(maxPage, currentPage + 1) });
    }

    function jumpPage(page) {
        const pageNumber = Math.max(1, page);
        setCurrentPage(() => Math.min(pageNumber, maxPage));
    }

    return {
        currentPage, currentData, prevPage, nextPage, jumpPage, maxPage
    }
}

export default usePagination;