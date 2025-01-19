import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CardDefault from "./CardAvailable";
import SearchAndSorting from "./SearchAndSorting";

const AvailableMain = () => {
  const axiosPublic = useAxiosPublic();
  const [camps, setCamps] = useState([]);
  const [column, setColumn] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);

  console.log(count);

  let pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    axiosPublic.get("/campsCount").then((res) => {
      console.log(res.data);
      setCount(res.data.count);
    });
  }, []);

  useEffect(() => {
    axiosPublic
      .get(`/camps?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        console.log(res.data);
        setCamps(res.data);
      });
  }, [currentPage, itemsPerPage]);

  const handlePerPageChange = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="my-24">
      <div className="container">
        <SearchAndSorting setCamps={setCamps} setColumn={setColumn} />
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${column} gap-5 mt-10`}
        >
          {camps.map((camp) => (
            <CardDefault key={camp._id} camp={camp} />
          ))}
        </div>
        {/* pagination  */}
        <div className="pagination mt-16">
          <button
            className=" border border-camp-secondary hover:bg-camp-secondary hover:text-camp-background p-2 px-4 m-2 rounded-md "
            onClick={handlePrevPage}
          >
            Prev
          </button>
          {pages.map((number) => (
            <button
              className={`${
                currentPage === number
                  ? "bg-camp-accent text-camp-background"
                  : "bg-camp-info"
              }  p-2 px-4 m-2 rounded-md `}
              onClick={() => setCurrentPage(number)}
              key={number}
            >
              {number}
            </button>
          ))}
          <button
            className=" border border-camp-secondary hover:bg-camp-secondary hover:text-camp-background p-2 px-4 m-2 rounded-md "
            onClick={handleNextPage}
          >
            Next
          </button>
          <select
            value={itemsPerPage}
            onChange={handlePerPageChange}
            name=""
            id=""
            className=" border border-camp-secondary  p-2 px-4 m-2 rounded-md "
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AvailableMain;
