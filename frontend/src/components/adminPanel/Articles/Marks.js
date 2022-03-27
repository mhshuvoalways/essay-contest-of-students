import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { articleUpdate } from "../../../store/actions/articleAction";
import enableBtn from "../../../store/actions/enableBtnAction";
import shortid from "shortid";

const Marks = ({ id, articleReducer }) => {
  const [state, setState] = useState({
    marks: "",
    option: [
      {
        _id: shortid.generate(),
        link: "",
      },
    ],
  });

  const dispatch = useDispatch();

  const adminUserReducer = useSelector((store) => store.adminUserReducer);
  const enableBtnReducer = useSelector((store) => store.enableBtnReducer);
  const finalMarks = articleReducer.articles.find((el) => el._id === id);

  useEffect(() => {
    if (adminUserReducer.user.role === "admin") {
      setState({
        marks: finalMarks.finalMarks && finalMarks.finalMarks,
        option: finalMarks.sharedLinks.length
          ? finalMarks.sharedLinks
          : state.option,
      });
    } else {
      const find = finalMarks.avgMarks.find(
        (el) => el.author === adminUserReducer.user._id
      );
      setState({
        marks: finalMarks.avgMarks.length && find.marks,
      });
    }
  }, [
    adminUserReducer.user._id,
    adminUserReducer.user.role,
    finalMarks.avgMarks,
    finalMarks.finalMarks,
    finalMarks.sharedLinks,
    state.option,
  ]);

  const onChangeHandler = (event, index) => {
    const { option } = state;
    option[index].link = event.target.value;
    setState({ ...state, option });
  };

  const addOption = () => {
    const { option } = state;
    option.push({
      _id: shortid.generate(),
      link: "",
    });
    setState({
      ...state,
      option,
    });
  };

  const marksHandler = (event) => {
    setState({ ...state, marks: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(
      articleUpdate(
        {
          marks: state.marks,
          option: JSON.stringify(state.option),
        },
        id
      )
    );
    dispatch(enableBtn(false));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {adminUserReducer.user.role === "admin" && (
        <div className="mb-2">
          <div className="flex justify-between">
            <label className="block mb-2">Give Link</label>
            <label
              className="block mb-2 bg-red-600 text-white p-1 cursor-pointer hover:bg-gray-900"
              onClick={addOption}
            >
              Add options
            </label>
          </div>
          {state.option.map((el, index) => {
            return (
              <div className="flex gap-3 mt-5" key={index}>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="link"
                  placeholder="Give link"
                  onChange={(event) => onChangeHandler(event, index)}
                  value={el.link}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="mb-2">
        <label className="block mb-2">Give mark</label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="marks"
          placeholder="Give mark"
          onChange={marksHandler}
          value={state.marks}
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
  );
};

export default Marks;
