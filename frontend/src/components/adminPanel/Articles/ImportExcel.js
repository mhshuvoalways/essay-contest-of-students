import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const ImportExcel = () => {
  return (
    <div>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="bg-red-600 text-white px-3 py-2 hover:bg-gray-900 w-42"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
    </div>
  );
};

export default ImportExcel;
