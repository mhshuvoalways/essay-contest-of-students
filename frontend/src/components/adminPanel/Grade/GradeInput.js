import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gradeAdd } from "../../../store/actions/gradeAction";
import enableBtn from "../../../store/actions/enableBtnAction";

const GradeInput = () => {
  const [state, setState] = useState({
    gradeName: "",
    gradeMinValue: "",
    gradeMaxValue: "",
  });

  const dispatch = useDispatch();
  const enableBtnReducer = useSelector((store) => store.enableBtnReducer);

  const onChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(gradeAdd(state));
    dispatch(enableBtn(false));
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
      {enableBtnReducer ? (
        <button className="bg-red-600 text-white py-1 mt-5 w-full hover:bg-gray-900">
          Add
        </button>
      ) : (
        <button className="bg-gray-600 opacity-50 cursor-not-allowedtext-white py-1 mt-5 w-full hover:bg-gray-900">
          Add
        </button>
      )}
    </form>
  );
};

export default GradeInput;
