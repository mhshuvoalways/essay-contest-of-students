import React from "react";

const GradeSelection = () => {
  return (
    <div className="shadow-sm bg-gray-50 border overflow-x-auto">
      <table className="w-full ">
        <tr>
          <th className="text-left border px-2 py-3">Grade Name</th>
          <th className="text-left border px-2 py-3">Min Value</th>
          <th className="text-left border px-2 py-3">Max Value</th>
          <th className="text-left border px-2 py-3 w-20">Action</th>
        </tr>
        <tr>
          <td className="text-left border p-2">First</td>
          <td className="text-left border p-2">95.00</td>
          <td className="text-left border p-2">100.00</td>
          <td className="text-left border p-2 flex gap-4 flex-wrap justify-between">
            <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
            <i class="fa-solid fa-trash-can cursor-pointer"></i>
          </td>
        </tr>
        <tr>
          <td className="text-left border p-2">Second</td>
          <td className="text-left border p-2">95.00</td>
          <td className="text-left border p-2">100.00</td>
          <td className="text-left border p-2 flex gap-4 flex-wrap justify-between">
            <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
            <i class="fa-solid fa-trash-can cursor-pointer"></i>
          </td>
        </tr>
        <tr>
          <td className="text-left border p-2">Third</td>
          <td className="text-left border p-2">95.00</td>
          <td className="text-left border p-2">100.00</td>
          <td className="text-left border p-2 flex gap-4 flex-wrap justify-between">
            <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
            <i class="fa-solid fa-trash-can cursor-pointer"></i>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default GradeSelection;
