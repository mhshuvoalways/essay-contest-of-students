import React from "react";
import { useSelector } from "react-redux";
import ImportExcel from "./ImportExcel";

const Filter = ({ changeHandler, selectHandler }) => {
  const adminUserReducer = useSelector((store) => store.adminUserReducer);

  const language = [
    {
      name: "All",
    },
    {
      name: "English",
    },
    {
      name: "Hindi",
    },
    {
      name: "Bangla",
    },
  ];

  return (
    <div className="flex justify-between flex-wrap">
      {adminUserReducer.user.role === "admin" && <ImportExcel />}
      <div className="p-3 border flex gap-2 mb-2 flex-wrap w-42">
        <label>Language:</label>
        <select
          className="bg-gray-50 border border-gray-300 rounded-lg w-28"
          onChange={selectHandler}
        >
          {language.map((el) => (
            <option>{el.name}</option>
          ))}
        </select>
      </div>
      <div className="p-3 border flex gap-2 mb-2 flex-wrap sm:flex-nowrap w-42">
        <label className="">Search:</label>
        <input
          type="text"
          placeholder="Search with email"
          className="px-2 rounded-lg w-full bg-gray-50 border border-gray-300"
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default Filter;
