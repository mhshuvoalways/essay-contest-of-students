import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { articlePost } from "../../store/actions/articleAction";
import { ispaysubmitGet } from "../../store/actions/isPaySubmitAction";
import { getQuarterAnnounce } from "../../store/actions/quarterlyAnnounceAction";
import enableBtn from "../../store/actions/enableBtnAction";
import { getMe } from "../../store/actions/userAction";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Payment from "./Payment";

const SubmitArticle = () => {
  const [state, setState] = useState({
    language: "",
    typeofArticle: "",
    article: "",
  });
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const isPaySubmitReducer = useSelector((store) => store.isPaySubmitReducer);
  const enableBtnReducer = useSelector((store) => store.enableBtnReducer);
  const quarterlyAnnounceReducer = useSelector(
    (store) => store.quarterlyAnnounceReducer
  );

  useEffect(() => {
    dispatch(getMe());
    dispatch(ispaysubmitGet());
    dispatch(getQuarterAnnounce());
  }, [dispatch]);

  const categoriesLanguages = [
    {
      name: "English",
      id: 1,
    },
    {
      name: "Hindi",
      id: 2,
    },
    {
      name: "Bangla",
      id: 3,
    },
  ];

  const categoriesArticle = [
    {
      name: "Story",
      id: 1,
    },
    {
      name: "Poem",
      id: 2,
    },
  ];

  const changeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleChange = (value) => {
    setState({ ...state, article: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(articlePost(state, navigation));
    dispatch(enableBtn(false));
    setState({ language: "Default", typeofArticle: "Default", article: "" });
  };

  return (
    <div className="mt-12 max-w-xl sm:p-6 lg:p-8 m-auto shadow-md p-10 rounded-md bg-gray-50">
      {quarterlyAnnounceReducer.data.toggleStartStop ? (
        isPaySubmitReducer.ispaysubmitObj.isPayment && (
          <p className="border p-4">
            You can submit{" "}
            {3 - isPaySubmitReducer.ispaysubmitObj.submissionCount} more times
            out of 3 times
          </p>
        )
      ) : (
        <p className="border p-4">Quarterly didn't start yet</p>
      )}

      <form onSubmit={onSubmit}>
        <div className="mt-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Select a Language
          </label>
          <label>
            <select
              className="py-3 px-4 w-full text-gray-600 relative bg-gray-200 rounded text-sm border border-gray-400 outline-none border-none focus:outline-none focus:bg-white focus:border-gray-500"
              name="language"
              value={state.language}
              onChange={changeHandler}
            >
              <option>Default</option>
              {categoriesLanguages.map((el) => (
                <option key={el._id}>{el.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Select type of Article
          </label>
          <label>
            <select
              className="py-3 px-4 w-full text-gray-600 relative bg-gray-200 rounded text-sm border border-gray-400 outline-none border-none focus:outline-none focus:bg-white focus:border-gray-500"
              name="typeofArticle"
              onChange={changeHandler}
              value={state.typeofArticle}
            >
              <option>Default</option>
              {categoriesArticle.map((el) => (
                <option key={el._id}>{el.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-5">
          <ReactQuill
            value={state.article}
            onChange={handleChange}
            className="appearance-none block font-bold bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Enter your article"
          />
        </div>
        <div className="mt-5 ">
          {quarterlyAnnounceReducer.data.toggleStartStop ? (
            isPaySubmitReducer.ispaysubmitObj.isPayment ? (
              enableBtnReducer ? (
                <button className="bg-red-600 text-white py-2 mt-5 w-full hover:bg-gray-900">
                  SUBMIT
                </button>
              ) : (
                <button className="bg-gray-600 opacity-50 cursor-not-allowed text-white py-2 mt-5 w-full hover:bg-gray-900">
                  SUBMIT
                </button>
              )
            ) : (
              <Payment />
            )
          ) : (
            <button
              className="bg-gray-600 opacity-50 cursor-not-allowed text-white py-2 mt-5 w-full hover:bg-gray-900"
              type="button"
            >
              PAYMENT
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SubmitArticle;
