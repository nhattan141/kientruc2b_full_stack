import * as React from "react";

function useTablePagination(data, itemPerPage) {
    const [currentPage, setCurrentPage] = React.useState(0);
    const maxPage = Math.ceil(data.length / itemPerPage);

    function currentTableData() {
        const start = currentPage * itemPerPage;
        const end = start + itemPerPage;
        return data.slice(start, end);
    }

    function prevPage() {
        setCurrentPage((currentPage) => { Math.max(0, currentPage - 1) });
    }

    function nextPage() {
        setCurrentPage((currentPage) => { Math.min(maxPage, currentPage) });
    }

    function jumpPage(page) {
        const pageNumber = Math.max(0, page);
        setCurrentPage(() => Math.min(pageNumber, maxPage));
    }

    return {
        currentPage, currentTableData, prevPage, nextPage, jumpPage, maxPage
    }
}

export default useTablePagination;