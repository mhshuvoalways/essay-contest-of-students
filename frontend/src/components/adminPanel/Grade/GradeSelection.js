import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  modalToggle,
  gradeGet,
  gradeDelete,
} from "../../../store/actions/gradeAction";

const GradeSelection = ({ value }) => {
  const dispatch = useDispatch();
  const gradeReducer = useSelector((store) => store.gradeReducer);

  useEffect(() => {
    dispatch(gradeGet());
  }, [dispatch]);

  const performanceSearch = gradeReducer.grade.filter((grade) =>
    grade.gradeName.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="shadow-sm bg-gray-50 border overflow-x-auto">
      <table className="w-full ">
        <tr>
          <th className="text-left border px-2 py-3">Grade Name</th>
          <th className="text-left border px-2 py-3">Min Value</th>
          <th className="text-left border px-2 py-3">Max Value</th>
          <th className="text-left border px-2 py-3 w-20">Action</th>
        </tr>

        {performanceSearch.map((grade) => (
          <tr key={grade._id}>
            <td className="text-left border p-2">{grade.gradeName}</td>
            <td className="text-left border p-2">{grade.gradeMinValue}</td>
            <td className="text-left border p-2">{grade.gradeMaxValue}</td>
            <td className="text-left border p-2 flex gap-4 flex-wrap justify-between">
              <i
                class="fa-solid fa-pen-to-square cursor-pointer"
                onClick={() => dispatch(modalToggle(true, grade._id))}
              ></i>
              <i
                class="fa-solid fa-trash-can cursor-pointer"
                onClick={() => dispatch(gradeDelete(grade._id))}
              ></i>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default GradeSelection;
