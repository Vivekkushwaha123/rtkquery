import { v4 as uuidv4 } from "uuid";
import { useAddUserMutation, useUpdateUserMutation } from "../features/api";

import { Button, Input, Heading } from "../components/index";
import formInput from "../form.json";
import { useNavigate } from "react-router-dom";

const style = {
  submitButton: "px-2 bg-indigo-500 p-1 my-1 rounded font-bold	",
  updateButton: " px-2 bg-yellow-500 p-1 my-1 rounded font-bold	",
};

const Form = ({ data, setData }) => {
  const navigate = useNavigate();

  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ ...data, id: uuidv4() });
    document.getElementById("form").reset();
    navigate("/");
  };

  return (
    <div className="  flex flex-col justify-center items-center w-full ">
      <Heading title={"Add Book"} />
      <form
        action=""
        id="form"
        className="border border-black rounded-lg w-5/6 py-5 px-10"
      >
        {formInput.map((obj, i) => {
          return (
            <Input
              key={obj.name + i}
              title={obj.title}
              name={obj.name}
              type={obj.type}
              value={data[obj.name]}
              handleClick={handleChange}
            />
          );
        })}

        <Button
          btnName="Submit"
          classStyle={style.submitButton}
          handleFunction={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
