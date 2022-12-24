import { Button, Heading } from "./";
import { useDeleteUserMutation, useGetBookQuery } from "../features/api";

const style = {
  td: "p-1 border border-1 border-stone-900 text-center",
  btn: " px-2 p-1 rounded border-1 border-stone-900 font-bold border text-center",
};

const tHeadArr = [
  "Sr.no",
  "Enrollment Number",
  "Book Name",
  "Student Name",
  "Issue Date",
  "Return Date",
  "Return",
];

const Table = () => {
  const [deleteUser] = useDeleteUserMutation();

  const { data } = useGetBookQuery();

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
                  <td className={style.td}>{ele.roll_no}</td>
                  <td className={style.td}>{ele.book_name}</td>
                  <td className={style.td}>{ele.student_name}</td>
                  <td className={style.td}>{ele.issue_date}</td>
                  <td className={style.td}>{ele.return_date}</td>

                  <td className={style.td}>
                    <Button
                      classStyle={style.btn + " bg-red-300"}
                      btnName="Return"
                      handleFunction={() => handleDelete(ele.id)}
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
