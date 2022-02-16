import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(itemsPerPage);

  return (
    <>
      <h3>pagination</h3>
      <ul>
        {pageNumbers.map((item) => (
          <li key={item}>
            <a
              onClick={() => {
                paginate(item);
              }}
              href="#"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
