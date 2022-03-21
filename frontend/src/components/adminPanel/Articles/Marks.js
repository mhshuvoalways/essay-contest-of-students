import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { articleUpdate } from "../../../store/actions/articleAction";
import enableBtn from "../../../store/actions/enableBtnAction";

const Marks = ({ id, articleReducer }) => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const adminUserReducer = useSelector((store) => store.adminUserReducer);
  const enableBtnReducer = useSelector((store) => store.enableBtnReducer);

  const onChangeHandler = (event) => {
    setState(event.target.value);
  };

  useEffect(() => {
    if (adminUserReducer.user.role === "admin") {
      const finalMarks = articleReducer.articles.find((el) => el._id === id);
      setState(finalMarks.finalMarks);
    }
  }, [adminUserReducer.user.role, articleReducer.articles, id]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(articleUpdate({ marks: state }, id));
    dispatch(enableBtn(false));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-2">
        <label className="block mb-2">Give mark</label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="marks"
          placeholder="Give mark"
          onChange={onChangeHandler}
          value={state}
        />
      </div>
      {enableBtnReducer ? (
        <button className="bg-red-600 text-white py-1 mt-5 w-full hover:bg-gray-900">
          Marks
        </button>
      ) : (
        <button className="bg-gray-600 opacity-50 cursor-not-allowed text-white py-1 mt-5 w-full hover:bg-gray-900">
          Marks
        </button>
      )}
    </form>
  );
};

export default Marks;
