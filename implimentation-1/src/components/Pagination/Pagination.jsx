import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";

const Pagination = () => {
  const [fetching, setFetching] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=3`
    );
    const jsonData = await res.json();
    console.log(jsonData);
    setFetching(jsonData);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <div>Pagination</div>
      <button onClick={handlePrev}>prev </button>
      <button>{currentPage}</button>
      <button onClick={handleNext}>Next</button>
      <div>
        {fetching?.map((item) => (
          <DataCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Pagination;
