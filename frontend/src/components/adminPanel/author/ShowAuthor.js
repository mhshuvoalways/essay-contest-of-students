import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAuthor } from "../../../store/actions/authorAction";

const Awards = () => {
  const dispatch = useDispatch();
  const authorReducer = useSelector((store) => store.authorReducer);

  useEffect(() => {
    dispatch(getAllAuthor());
  }, [dispatch]);

  return (
    <div className="shadow-sm bg-gray-50 border overflow-x-auto mt-10">
      <table className="w-full ">
        <tr>
          <th className="text-left border px-2 py-3">Name</th>
          <th className="text-left border px-2 py-3">Email</th>
          <th className="text-left border px-2 py-3">Book Name</th>
        </tr>
        {authorReducer.author.reverse().map((el) => (
          <tr key={el._id}>
            <td className="text-left border p-2">{el.author.name}</td>
            <td className="text-left border p-2">{el.author.email}</td>
            <td className="text-left border p-2">{el.bookName}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Awards;
