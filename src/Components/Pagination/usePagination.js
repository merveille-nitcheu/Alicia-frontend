

import { useState, useEffect } from "react";

const usePagination = (data, itemsPerPage) => {
	// current page state
	const [currentPage, setCurrentPage] = useState(1);

	// current data state
	const [currentData, setCurrentData] = useState([]);

	// last item of current data state
	const [endItem, setEndItem] = useState(10);

	// first item of current data state
	const [beginItem, setBeginItem] = useState(1);

	// max number of page
	const maxPage = Math.ceil(data?.length / itemsPerPage);

	useEffect(() => {
		const begin = (currentPage - 1) * itemsPerPage;

		const end = begin + itemsPerPage;

		setBeginItem(() => {
			if (currentPage === 1) {
				return currentPage;
			} else {
				return begin;
			}
		});
		setEndItem(() => {
			if (currentPage === maxPage) {
				return data?.length;
			} else {
				return end;
			}
		});
		setCurrentData(data?.slice(begin, end));

		return () => {};
	}, [currentPage, itemsPerPage, data, maxPage]);

	// next action
	const next = () => {
		setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
	};

	// previous action
	const prev = () => {
		setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
	};

	// jump action
	const jump = (page) => {
		const pageNumber = Math.max(1, page);
		setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
	};

	return {
		next,
		prev,
		jump,
		beginItem,
		endItem,
		currentData,
		currentPage,
		maxPage,
		dataLength: data?.length,
	};
};

export default usePagination;
