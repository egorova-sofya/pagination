import React from "react";

const Items = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <b>{item.id}</b>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default Items;
