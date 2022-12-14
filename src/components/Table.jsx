import React from "react";
import Button from "./Button";

import { useDeleteUserMutation } from "../features/api";
import Heading from "./heading";
import { useNavigate } from "react-router-dom";

const style = {
  td: "p-1 border border-1 border-stone-900 text-center",
  btn: " px-2 p-1 rounded border-1 border-stone-900 font-bold border text-center",
};

const tHeadArr = [
  "Sr.no",
  "Book Name",
  "ISBN Number",
  "Subject",
  "Edition",
  "Cost",
  "View",
];

const Table = ({ setData, getUser }) => {
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();

  const { data } = getUser;
  const handleView = (ele) => {
    setData(ele);
    navigate("/viewbook");
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  return (
    <div className="mt-20">
      <Heading title={"All Books"} />
      <div className="flex flex-col justify-center m-3 ">
        <table>
          <thead>
            <tr>
              {tHeadArr.map((ele, i) => {
                return (
                  <th
                    className="border p-2 border-1 border-stone-900"
                    key={ele + i}
                  >
                    {ele}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data?.map((ele, i) => {
              return (
                <tr key={ele.id}>
                  <td className={style.td}>{i + 1}</td>
                  <td className={style.td}>{ele.book_name}</td>
                  <td className={style.td}>{ele.isbn}</td>
                  <td className={style.td}>{ele.subject}</td>
                  <td className={style.td}>{ele.edition}</td>
                  <td className={style.td}>{ele.cost}</td>

                  <td className={style.td}>
                    <Button
                      classStyle={style.btn + " bg-zinc-300"}
                      btnName="View"
                      handleFunction={() => handleView(ele)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
