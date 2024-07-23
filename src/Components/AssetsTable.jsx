import React from "react";
import { MdFileDownload } from "react-icons/md";

const AssetTable = () => {
  const data = [
    {
      asset: "Ge ECG Machine",
      code: "AG-7645698",
      department: "Blood Center",
      dateTime: "03/04/2023 @ 12.30",
      downTime: "10 hr : 24 m : 32 s",
      status: "Cleared",
    },
    {
      asset: "Ge ECG Machine",
      code: "AG-7645698",
      department: "Blood Center",
      dateTime: "03/04/2023 @ 12.30",
      downTime: "10 hr : 24 m : 32 s",
      status: "Open",
    },
    {
      asset: "Ge ECG Machine",
      code: "AG-7645698",
      department: "Blood Center",
      dateTime: "03/04/2023 @ 12.30",
      downTime: "10 hr : 24 m : 32 s",
      status: "Cleared",
    },
    {
      asset: "Ge ECG Machine",
      code: "AG-7645698",
      department: "Blood Center",
      dateTime: "03/04/2023 @ 12.30",
      downTime: "10 hr : 24 m : 32 s",
      status: "Open",
    },
    {
      asset: "Ge ECG Machine",
      code: "AG-7645698",
      department: "Blood Center",
      dateTime: "03/04/2023 @ 12.30",
      downTime: "10 hr : 24 m : 32 s",
      status: "Cleared",
    },
    {
      asset: "Ge ECG Machine",
      code: "AG-7645698",
      department: "Blood Center",
      dateTime: "03/04/2023 @ 12.30",
      downTime: "10 hr : 24 m : 32 s",
      status: "Cleared",
    },
    
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2  text-left">Asset</th>
            <th className="px-4 py-2  text-left">Code</th>
            <th className="px-4 py-2  text-left">Department</th>
            <th className="px-4 py-2  text-left">Date & Time</th>
            <th className="px-4 py-2  text-left">Down Time</th>
            <th className="px-4 py-2  ext-left">Status</th>
            <th className="px-4 py-2  text-left">Report</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2  text-left pb-4">{item.asset}</td>
              <td className="px-4 py-2  text-left pb-4">{item.code}</td>
              <td className="px-4 py-2  text-left pb-4">{item.department}</td>
              <td className="px-4 py-2  text-left pb-4">{item.dateTime}</td>
              <td className="px-4 py-2  text-left pb-4">{item.downTime}</td>
              <td className="px-4 py-2  text-left ">
                <span
                  className={`${
                    item.status === "Open"
                      ? "bg-orange-500 text-white"
                      : "text-blue-600"
                  } px-3 py-1 rounded-full`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-2 border-b text-left text-blue-600 cursor-pointer ">
                <i className="fas fa-download text-black ">
                  <MdFileDownload />
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;
