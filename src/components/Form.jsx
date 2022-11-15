import { v4 as uuidv4 } from "uuid";
import { useAddUserMutation, useUpdateUserMutation } from "../features/api";

import { Button, Input } from "../components/index";

const style = {
  submitButton: "px-2 bg-indigo-500 p-1 my-1 rounded font-bold	",
  updateButton: " px-2 bg-yellow-500 p-1 my-1 rounded font-bold	",
};

const Form = ({ data, setData }) => {
  const { name, email, phoneNumber, gender, isEditing } = data;

  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    checked && name === "isEligible"
      ? setData({ ...data, isEligible: "Checked" })
      : !checked && name === "isEligible"
      ? setData({ ...data, isEligible: "Not Checked" })
      : setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ ...data, id: uuidv4(), isEditing: false });
    document.getElementById("form").reset();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ ...data, isEditing: false });
    document.getElementById("form").reset();
  };

  return (
    <div className=" my-10 flex justify-center items-center">
      <form action="" id="form" className="border py-5 px-10">
        <Input
          title="Name"
          name="name"
          type="text"
          value={name}
          isEditing={isEditing}
          handleClick={handleChange}
        />
        <Input
          title="Email"
          name="email"
          type="email"
          value={email}
          isEditing={isEditing}
          handleClick={handleChange}
        />
        <Input
          title="Phone Number"
          name="phoneNumber"
          type="number"
          value={phoneNumber}
          isEditing={isEditing}
          handleClick={handleChange}
        />
        <Input
          className="my-1"
          title="Gender"
          name="gender"
          type="radio"
          male="Male"
          female="Female"
          value={gender}
          isEditing={isEditing}
          handleClick={handleChange}
        />
        <Input
          title="Are you above 18"
          type="checkbox"
          name="isEligible"
          id="checkbox"
          isEditing={isEditing}
          handleClick={handleChange}
        />
        {!isEditing ? (
          <Button
            btnName="Submit"
            classStyle={style.submitButton}
            handleFunction={handleSubmit}
          />
        ) : (
          <Button
            btnName="Update"
            classStyle={style.updateButton}
            handleFunction={handleUpdate}
          />
        )}
      </form>
    </div>
  );
};

export default Form;
