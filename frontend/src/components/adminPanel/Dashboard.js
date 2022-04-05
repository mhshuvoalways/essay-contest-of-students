import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../../store/actions/adminUserAction";
import { getUsers } from "../../store/actions/userAction";
import { getArticle } from "../../store/actions/articleAction";
import { getAllPayments } from "../../store/actions/paymentAction";
import { getQuarterAnnounce } from "../../store/actions/quarterlyAnnounceAction";

const Dashboard = () => {
  const adminUserReducer = useSelector((store) => store.adminUserReducer);
  const userReducer = useSelector((store) => store.userReducer);
  const articleReducer = useSelector((store) => store.articleReducer);
  const paymentReducer = useSelector((store) => store.paymentReducer);
  const quarterlyAnnounceReducer = useSelector(
    (store) => store.quarterlyAnnounceReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(getUsers());
    dispatch(getArticle());
    dispatch(getAllPayments());
    dispatch(getQuarterAnnounce());
  }, [dispatch]);

  let story = 0;
  articleReducer.articles.forEach((article) => {
    if (article.typeofArticle === "Story") {
      story++;
    }
  });

  let poems = 0;
  articleReducer.articles.forEach((article) => {
    if (article.typeofArticle === "Poem") {
      poems++;
    }
  });

  let articles = 0;
  articleReducer.articles.forEach((article) => {
    if (
      article.qya.quarterly === quarterlyAnnounceReducer.data.quarterly &&
      article.qya.year === quarterlyAnnounceReducer.data.year
    ) {
      articles++;
    }
  });

  const isApproved =
    adminUserReducer.allUser.length &&
    adminUserReducer.allUser.filter((judge) => judge.isApproved);

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 m-auto mb-72">
      <div className="flex justify-between gap-3 flex-wrap">
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-gavel text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3 border-2"></i>
            <p className="text-2xl">JUDGES</p>
          </div>
          <p className="text-2xl text-center">
            {adminUserReducer.allUser.length ? isApproved.length : 0}
          </p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-user text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3 border-2"></i>
            <p className="text-2xl">USERS</p>
          </div>
          <p className="text-2xl text-center">
            {userReducer.getAllUser.length ? userReducer.getAllUser.length : 0}
          </p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-pen text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">ARTICLES</p>
          </div>
          <p className="text-2xl text-center">{articles}</p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-money-bill text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">PAYMENTS</p>
          </div>
          <p className="text-2xl text-center">
            {paymentReducer.length ? paymentReducer.length : 0}
          </p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-pen text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">STORY</p>
          </div>
          <p className="text-2xl text-center">{story}</p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-pen text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">POEM</p>
          </div>
          <p className="text-2xl text-center">{poems}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
