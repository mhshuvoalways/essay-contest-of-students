import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addquarterAnnounce,
  getQuarterAnnounce,
  updateAnnounce,
} from "../../store/actions/quarterlyAnnounceAction";
import enableBtn from "../../store/actions/enableBtnAction";

const AnnounceResult = () => {
  const [state, setState] = useState({
    year: "",
    quarterly: "",
    toggleStartStop: false,
    isAnnounce: false,
  });

  const quarterAnnounce = useSelector(
    (store) => store.quarterlyAnnounceReducer
  );
  const enableBtnReducer = useSelector((store) => store.enableBtnReducer);

  const dispatch = useDispatch();

  const temp = [];
  const date = new Date();
  for (let i = 2022; i <= date.getFullYear(); i++) {
    temp.unshift(i);
  }

  const categories = [
    {
      name: "First quarterly",
      id: 1,
    },
    {
      name: "Second quarterly",
      id: 2,
    },
    {
      name: "Third quarterly",
      id: 3,
    },
  ];

  useEffect(() => {
    dispatch(getQuarterAnnounce());
    setState({
      year: quarterAnnounce.data.year,
      quarterly: quarterAnnounce.data.quarterly,
      toggleStartStop: quarterAnnounce.data.toggleStartStop,
      isAnnounce: quarterAnnounce.data.isAnnounce,
    });
  }, [
    dispatch,
    quarterAnnounce.data.isAnnounce,
    quarterAnnounce.data.quarterly,
    quarterAnnounce.data.toggleStartStop,
    quarterAnnounce.data.year,
  ]);

  const changeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addquarterAnnounce(state));
    dispatch(enableBtn(false));
  };

  const onSubmitIsAnnounce = (event) => {
    event.preventDefault();
    dispatch(updateAnnounce());
    dispatch(enableBtn(false));
  };

  return (
    <form className="max-w-md m-auto bg-gray-50 rounded-md p-10 shadow-md">
      <div>
        <label className="block text-gray-700">SELECT A YEAR</label>
        <label>
          <select
            className="py-3 px-4 w-full text-gray-600 relative bg-gray-200 rounded text-sm border border-gray-400 outline-none border-none focus:outline-none focus:bg-white focus:border-gray-500"
            name="year"
            onChange={changeHandler}
            value={state.year}
          >
            <option>Default</option>
            {temp.map((el) => (
              <option key={el}>{el}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-5">
        <label className="block text-gray-700" for="grid-year">
          SELECT QUARTERLY
        </label>
        <label>
          <select
            className="py-3 px-4 w-full text-gray-600 relative bg-gray-200 rounded text-sm border border-gray-400 outline-none border-none focus:outline-none focus:bg-white focus:border-gray-500"
            name="quarterly"
            onChange={changeHandler}
            value={state.quarterly}
          >
            <option>Default</option>
            {categories.map((el) => (
              <option key={el.id}>{el.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-5">
        {state.toggleStartStop ? (
          enableBtnReducer ? (
            <button
              className="bg-red-600 text-white py-2 mt-5 w-full hover:bg-gray-900"
              onClick={onSubmit}
            >
              STOP
            </button>
          ) : (
            <button
              className="bg-gray-600 opacity-50 cursor-not-allowed text-white py-2 mt-5 w-full hover:bg-gray-900"
              type="button"
            >
              STOP
            </button>
          )
        ) : enableBtnReducer ? (
          <button
            className="bg-pink-600 text-white py-2 mt-5 w-full hover:bg-gray-900"
            onClick={onSubmit}
          >
            START
          </button>
        ) : (
          <button
            className="bg-gray-600 opacity-50 cursor-not-allowed text-white py-2 mt-5 w-full hover:bg-gray-900"
            type="button"
          >
            START
          </button>
        )}
        {state.toggleStartStop ? (
          state.isAnnounce ? (
            enableBtnReducer ? (
              <button
                className="bg-red-600 text-white py-2 mt-5 w-full hover:bg-gray-900"
                onClick={onSubmitIsAnnounce}
              >
                ANNOUNCE RESULT STOP
              </button>
            ) : (
              <button
                className="bg-gray-600 opacity-50 cursor-not-allowed text-white py-2 mt-5 w-full hover:bg-gray-900"
                type="button"
              >
                ANNOUNCE RESULT STOP
              </button>
            )
          ) : enableBtnReducer ? (
            <button
              className="bg-pink-600 text-white py-2 mt-5 w-full hover:bg-gray-900"
              onClick={onSubmitIsAnnounce}
            >
              ANNOUNCE RESULT START
            </button>
          ) : (
            <button
              className="bg-gray-600 opacity-50 cursor-not-allowed text-white py-2 mt-5 w-full hover:bg-gray-900"
              type="button"
            >
              ANNOUNCE RESULT START
            </button>
          )
        ) : (
          state.isAnnounce && (
            <button
              className="bg-gray-600 opacity-50 text-white py-2 mt-5 w-full hover:bg-gray-900 cursor-not-allowed"
              type="button"
            >
              ANNOUNCE RESULT START
            </button>
          )
        )}
      </div>
    </form>
  );
};

export default AnnounceResult;
