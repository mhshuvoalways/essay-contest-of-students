import React from "react";
import { useSelector } from "react-redux";

const Articles = () => {
  const adminReducer = useSelector((store) => store.adminUserReducer);

  return (
    <div className="shadow-sm bg-gray-50 border overflow-x-auto">
      <table className="w-full ">
        <tr>
          <th className="text-left border px-2 py-3">Name</th>
          <th className="text-left border px-2 py-3">Email</th>
          <th className="text-left border px-2 py-3">Mobile</th>
          <th className="text-left border px-2 py-3">Date</th>
          <th className="text-left border px-2 py-3">Avg Marks</th>
          {adminReducer.user.role === "admin" && (
            <>
              <th className="text-left border px-2 py-3">Marks</th>
              <th className="text-left border px-2 py-3">Action</th>
            </>
          )}
        </tr>
        <tr>
          <td className="text-left border p-2">Alfreds Futterkiste</td>
          <td className="text-left border p-2">alf@gmail.com</td>
          <td className="text-left border p-2">3435444676</td>
          <td className="text-left border p-2">12-03-2022</td>
          <td className="text-left border p-2">85</td>
          {adminReducer.user.role === "admin" && (
            <>
              <td className="text-left border p-2">90</td>
              <td className="text-left border p-2 flex gap-2 flex-wrap justify-between">
                <i class="fa-solid fa-eye cursor-pointer"></i>
                <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
                <i class="fa-solid fa-trash-can cursor-pointer"></i>
              </td>
            </>
          )}
        </tr>
      </table>
    </div>
  );
};

export default Articles;
