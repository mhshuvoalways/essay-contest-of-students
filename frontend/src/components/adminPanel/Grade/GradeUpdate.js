import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gradeUpdate } from "../../../store/actions/gradeAction";
import enableBtn from "../../../store/actions/enableBtnAction";

const GradeInput = () => {
  const [state, setState] = useState({
    gradeName: "",
    gradeMinValue: "",
    gradeMaxValue: "",
  });

  const dispatch = useDispatch();
  const gradeReducer = useSelector((store) => store.gradeReducer);
  const enableBtnReducer = useSelector((store) => store.enableBtnReducer);

  const onChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const findOne = gradeReducer.grade.find(
    (el) => el._id === gradeReducer.updateId
  );

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(gradeUpdate(findOne._id, state));
    dispatch(enableBtn(false));
  };

  useEffect(() => {
    setState({
      gradeName: findOne.gradeName,
      gradeMinValue: findOne.gradeMinValue,
      gradeMaxValue: findOne.gradeMaxValue,
    });
  }, [findOne.gradeMaxValue, findOne.gradeMinValue, findOne.gradeName]);

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
          Update
        </button>
      ) : (
        <button className="bg-gray-600 opacity-50 cursor-not-allowed text-white py-1 mt-5 w-full hover:bg-gray-900">
          Update
        </button>
      )}
    </form>
  );
};

export default GradeInput;
