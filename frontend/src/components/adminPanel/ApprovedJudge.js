import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  getAllUser,
  approvedJudge,
  deleteJudge,
} from "../../store/actions/adminUserAction";
import enableBtn from "../../store/actions/enableBtnAction";

const ApprovedJudge = () => {
  const dispatch = useDispatch();

  const adminReducer = useSelector((store) => store.adminUserReducer);
  const enableBtnReducer = useSelector((store) => store.enableBtnReducer);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const reverseUser = [...adminReducer.allUser];

  return (
    <div className="shadow-sm bg-gray-50 border overflow-x-auto">
      <table className="w-full">
        <tr>
          <th className="text-left border px-2 py-3 ">Name</th>
          <th className="text-left border px-2 py-3">Email</th>
          <th className="text-left border px-2 py-3">Mobile</th>
          <th className="text-left border px-2 py-3">Date</th>
          <th className="text-left border px-2 py-3">Action</th>
        </tr>
        {reverseUser.reverse().map((el) => (
          <tr key={el._id}>
            <td className="text-left border p-2">{el.name}</td>
            <td className="text-left border p-2">{el.email}</td>
            <td className="text-left border p-2">{el.phone}</td>
            <td className="text-left border p-2">
              {moment(el.createdAt).format("L")}
            </td>
            <td className="text-left border p-2 flex gap-2">
              {enableBtnReducer ? (
                <button
                  className={
                    el.isApproved
                      ? "bg-green-600 text-white p-1 px-2 w-full hover:bg-gray-900"
                      : "bg-red-600 text-white p-1 px-2 w-full hover:bg-gray-900"
                  }
                  onClick={() => {
                    dispatch(approvedJudge(el._id));
                    dispatch(enableBtn(false));
                  }}
                >
                  {el.isApproved ? "Approved" : "Pending"}
                </button>
              ) : (
                <button className="bg-gray-600 opacity-50 cursor-not-allowed text-white p-1 px-2 w-full hover:bg-gray-900">
                  {el.isApproved ? "Approved" : "Pending"}
                </button>
              )}
              {enableBtnReducer ? (
                <button
                  className="bg-red-600 text-white p-1 px-2 w-full hover:bg-gray-900"
                  onClick={() => {
                    dispatch(deleteJudge(el._id));
                    dispatch(enableBtn(false));
                  }}
                >
                  Delete
                </button>
              ) : (
                <button className="bg-gray-600 opacity-50 cursor-not-allowed text-white p-1 px-2 w-full hover:bg-gray-900">
                  Delete
                </button>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ApprovedJudge;
