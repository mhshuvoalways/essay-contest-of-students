import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  getArticle,
  deleteArticle,
} from "../../../store/actions/articleAction";

const Articles = ({ modalHandler, search }) => {
  const dispatch = useDispatch();

  const adminReducer = useSelector((store) => store.adminUserReducer);
  const articleReducer = useSelector((store) => store.articleReducer);

  useEffect(() => {
    dispatch(getArticle());
  }, [dispatch]);

  const performanceSearch = articleReducer.articles.filter((grade) =>
    grade.author.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shadow-sm bg-gray-50 border overflow-x-auto">
      <table className="w-full">
        <tr>
          <th className="text-left border px-2 py-3">Name</th>
          <th className="text-left border px-2 py-3">Email</th>
          <th className="text-left border px-2 py-3">Mobile</th>
          <th className="text-left border px-2 py-3">Quarterly</th>
          <th className="text-left border px-2 py-3">Date</th>
          <th className="text-left border px-2 py-3 w-12">Avg Marks</th>
          {adminReducer.user.role === "admin" && (
            <>
              {" "}
              <th className="text-left border px-2 py-3 w-12">Marks</th>
              <th className="text-left border px-2 py-3 w-12">Grade</th>
            </>
          )}
          <th className="text-left border px-2 py-3">Action</th>
        </tr>
        {performanceSearch.map((el) => (
          <tr key={el._id}>
            <td className="text-left border p-2">{el.author.name}</td>
            <td className="text-left border p-2">{el.author.email}</td>
            <td className="text-left border p-2">{el.author.phone}</td>
            <td className="text-left border p-2">
              {el.qya.quarterly + " of " + el.qya.year}
            </td>
            <td className="text-left border p-2">
              {moment(el.author.createdAt).format("L")}
            </td>
            <td className="text-left border p-2">
              {adminReducer.user.role === "admin"
                ? el.finalAvg === 0
                  ? null
                  : Math.round(el.finalAvg)
                : el.avgMarks.map((am) => {
                    return adminReducer.user._id === am.author && am.marks;
                  })}
            </td>
            {adminReducer.user.role === "admin" ? (
              <>
                <td className="text-left border p-2">
                  {el.finalMarks === 0 ? null : el.finalMarks}
                </td>
                <td className="text-left border p-2">{el.grade && el.grade}</td>
                <td className="text-left border p-2 flex gap-2 flex-wrap justify-between">
                  <Link to={`/admin/article/${el._id}`}>
                    <i className="fa-solid fa-eye"></i>
                  </Link>
                  <i
                    className="fa-solid fa-pen-to-square cursor-pointer"
                    onClick={() => modalHandler(el._id)}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can cursor-pointer"
                    onClick={() => dispatch(deleteArticle(el._id))}
                  ></i>
                </td>
              </>
            ) : (
              <td className="text-left border p-2 flex gap-2 flex-wrap justify-between">
                <i
                  className="fa-solid fa-pen-to-square cursor-pointer"
                  onClick={() => modalHandler(el._id)}
                ></i>
              </td>
            )}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Articles;
