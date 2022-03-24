import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAward } from "../../store/actions/giveAwardAction";

const Awards = () => {
  const dispatch = useDispatch();
  const awardReducer = useSelector((store) => store.awardReducer);

  useEffect(() => {
    dispatch(getAward());
  }, [dispatch]);

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 m-auto mt-12 md:mb-96 mb-32">
      <div className="shadow-sm bg-gray-50 border overflow-x-auto">
        <table className="w-full ">
          <tr>
            <th className="text-left border px-2 py-3">Award Name</th>
          </tr>
          {awardReducer.award.reverse().map((el) => (
            <tr key={el._id}>
              <td className="text-left border p-2">{el.awardName}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Awards;
