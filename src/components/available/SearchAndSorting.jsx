import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Option,
  Select,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SearchAndSorting = ({ setCamps, setColumn }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const axiosPublic = useAxiosPublic();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeSorting = (e) => {
    setSort(e.target);
  };

  useEffect(() => {
    let dataSearch = async () => {
      const res = await axiosPublic.get(
        `/search?search=${search}&sort=${sort}`
      );
      setCamps(res.data);
    };
    dataSearch();
  }, [search, sort]);

  return (
    <div className="bg-camp-info p-5 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="w-full max-w-xl min-w-[200px]">
          <div className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              className="w-full bg-camp-background placeholder:text-slate-400 text-slate-700  text-sm border border-camp-accent rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-camp-primary hover:border-camp-primary shadow-sm focus:shadow"
              placeholder="Enter camp name"
              onChange={handleChange}
            />

            <button
              className="rounded-md bg-camp-accent py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-72 ">
            <Select
              color="blue"
              className=" text-camp-text"
              label="Sorting Camps"
              value={sort}
              onChange={(val) => setSort(val)}
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <Option value="m-des">Most Registered</Option>
              <Option value="camp-free-des">Camp free Highest</Option>
              <Option value="camp-free-acs">Camp free lowest</Option>
            </Select>
          </div>
          <div>
            <Menu
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <Button className="bg-camp-accent"> Layout Column</Button>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={() => setColumn(2)}>Column 2</MenuItem>
                <MenuItem onClick={() => setColumn(3)}>Column 3</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndSorting;
