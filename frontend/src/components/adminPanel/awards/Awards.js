import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { giveAward } from "../../../store/actions/giveAwardAction";
import enableBtn from "../../../store/actions/enableBtnAction";

const Awards = () => {
  const [state, setState] = useState({
    email: "",
    award: "",
  });

  const dispatch = useDispatch();

  const enableBtnReducer = useSelector((store) => store.enableBtnReducer);

  const changeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(giveAward(state));
    dispatch(enableBtn(false));
    setState({ email: "", award: "" });
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
          <label className="block mb-2">Give Awards</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="award"
            placeholder="Give Awards"
            onChange={changeHandler}
            value={state.award}
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

export default Awards;
