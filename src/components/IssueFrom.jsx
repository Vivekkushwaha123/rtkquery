import issueFrom from "../issueForm.json";
import { Heading, Button, Input } from "../components/index";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../features/api";
import { v4 as uuidv4 } from "uuid";

const style = {
  submitButton: "px-2 bg-indigo-500 p-1 my-1 rounded font-bold	",
};

const IssueFrom = () => {
  const [book, setBook] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [addBook] = useAddBookMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(book).every((ele) => ele !== "")) {
      addBook({ ...book, id: uuidv4() });
      navigate("/issuedbook");
    } else {
      setError("All Fields are required");
    }
  };
  return (
    <div className=" flex flex-col justify-center items-center w-full ">
      <Heading title={"IssueFrom"} />
      <form
        action=""
        id="form"
        className="border border-black rounded-lg w-1/2 py-5 px-10"
      >
        {issueFrom.map((obj, i) => {
          return (
            <Input
              key={obj.name + i}
              title={obj.title}
              name={obj.name}
              type={obj.type}
              placeholder={obj.placeholder}
              value={book[obj.name]}
              handleClick={handleChange}
            />
          );
        })}
        <div className="my-2 text-red-900 ">{error}</div>

        <Button
          btnName="Submit"
          classStyle={style.submitButton}
          handleFunction={handleSubmit}
        />
      </form>
    </div>
  );
};

export default IssueFrom;
