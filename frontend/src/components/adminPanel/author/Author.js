import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { giveAuthor } from "../../../store/actions/authorAction";
import enableBtn from "../../../store/actions/enableBtnAction";

const Author = () => {
  const [state, setState] = useState({
    email: "",
    bookName: "",
  });

  const dispatch = useDispatch();

  const enableBtnReducer = useSelector((store) => store.enableBtnReducer);

  const changeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(giveAuthor(state));
    dispatch(enableBtn(false));
    setState({ email: "", bookName: "" });
  };

  return (
    <div className="max-w-md m-auto bg-gray-50 rounded-md p-10 shadow-md">
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <label className="block mb-2">Email</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
            placeholder="Give Email"
            onChange={changeHandler}
            value={state.email}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2">Book Name</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="bookName"
            placeholder="Book Name"
            onChange={changeHandler}
            value={state.bookName}
          />
        </div>
        {enableBtnReducer ? (
          <button className="bg-red-600 text-white py-1 mt-5 w-full hover:bg-gray-900">
            Submit
          </button>
        ) : (
          <button className="bg-gray-600 opacity-50 cursor-not-allowed text-white py-1 mt-5 w-full hover:bg-gray-900">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Author;
