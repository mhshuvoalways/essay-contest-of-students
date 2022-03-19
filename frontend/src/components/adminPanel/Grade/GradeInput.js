import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gradeAdd } from "../../../store/actions/gradeAction";

const GradeInput = () => {
  const [state, setState] = useState({
    gradeName: "",
    gradeMinValue: "",
    gradeMaxValue: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(gradeAdd(state));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-2">
        <label className="block mb-2">Grade Name</label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="gradeName"
          placeholder="Grade Name"
          onChange={onChangeHandler}
          value={state.gradeName}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-2">Grade Min Value</label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="gradeMinValue"
          placeholder="Grade Min Value"
          onChange={onChangeHandler}
          value={state.gradeMinValue}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-2">Grade Max Value</label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="gradeMaxValue"
          placeholder="Grade Max Value"
          onChange={onChangeHandler}
          value={state.gradeMaxValue}
        />
      </div>
      <button className="bg-red-600 text-white py-1 mt-5 w-full hover:bg-gray-900">
        Add
      </button>
    </form>
  );
};

export default GradeInput;
