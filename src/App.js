import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Items from "./components/Items";
import Pagination from "./components/Pagination";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, SetCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setItems(res.data);
      setLoading(false);
    };
    getItems();
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = items?.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => {
    SetCurrentPage(pageNumber);
  };
  return (
    <div className="App">
      <h1>List</h1>
      <Items items={currentItem} loading={loading} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
