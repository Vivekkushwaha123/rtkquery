import React from "react";
import Heading from "./heading";

const style = {
  td: "p-1 border border-1 border-stone-900 text-center",
  btn: " px-2 p-1 rounded border-1 border-stone-900 font-bold border text-center",
};

const ViewBook = ({ data }) => {
  console.log({ data });
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading title="About Book" />
      <div className="table ">
        <table>
          <thead>
            <tr>
              <th className={style.td}>Book Name</th>
              <th className={style.td}>Isbn</th>
              <th className={style.td}>Author Name</th>
              <th className={style.td}>Subject</th>
              <th className={style.td}>Edition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.td}>{data?.book_name}</td>
              <td className={style.td}>{data?.isbn}</td>
              <td className={style.td}>{data?.author_name}</td>
              <td className={style.td}>{data?.subject}</td>
              <td className={style.td}>{data?.edition}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBook;
