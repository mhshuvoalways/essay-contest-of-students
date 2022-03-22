import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../../store/actions/adminUserAction";
import { getArticle } from "../../store/actions/articleAction";
import { getAllPayments } from "../../store/actions/paymentAction";

const Dashboard = () => {
  const adminUserReducer = useSelector((store) => store.adminUserReducer);
  const articleReducer = useSelector((store) => store.articleReducer);
  const paymentReducer = useSelector((store) => store.paymentReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(getArticle());
    dispatch(getAllPayments());
  }, [dispatch]);

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 m-auto mb-72">
      <div className="flex justify-between gap-3 flex-wrap">
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-gavel text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3 border-2"></i>
            <p className="text-2xl">JUDGES</p>
          </div>
          <p className="text-2xl text-center">
            {adminUserReducer.allUser.length - 1}
          </p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-pen text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3 border-2"></i>
            <p className="text-2xl">USERS</p>
          </div>
          <p className="text-2xl text-center">
            {adminUserReducer.allUser.length}
          </p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-crown text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">ARTICLES</p>
          </div>
          <p className="text-2xl text-center">
            {articleReducer.articles.length}
          </p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-money-bill text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">PAYMENTS</p>
          </div>
          <p className="text-2xl text-center">{paymentReducer.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
