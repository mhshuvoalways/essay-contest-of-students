import React from "react";
import { useDispatch } from "react-redux";
import { modalToggle } from "../../../store/actions/gradeAction";

const Filter = ({onChangeHandler}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between flex-wrap gap-2">
      <div>
        <p
          className="bg-red-600 hover:bg-gray-900 text-white cursor-pointer p-2"
          onClick={() => dispatch(modalToggle())}
        >
          + Add Grade
        </p>
      </div>
      <div className="p-3 border flex gap-2 mb-2 flex-wrap sm:flex-nowrap">
        <label className="">Search:</label>
        <input
          type="text"
          placeholder="Search with name"
          className="px-2 rounded-lg w-full bg-gray-50 border border-gray-300"
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default Filter;
