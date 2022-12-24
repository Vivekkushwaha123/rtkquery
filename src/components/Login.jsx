import loginForm from "../login.json";
import { Heading, Button, Input } from "../components/index";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const style = {
  submitButton: "px-2 bg-indigo-500 p-1 my-1 rounded font-bold	",
};

const Login = ({ setIsLoggined }) => {
  const [login, setLogin] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email && login.password) {
      localStorage.setItem("login", "login");
      setIsLoggined(true);
      navigate("/");
    } else {
      setError("All Fields are required");
    }
  };
  return (
    <div className=" flex flex-col justify-center items-center w-full ">
      <Heading title={"Login"} />
      <form
        action=""
        id="form"
        className="border border-black rounded-lg w-1/2 py-5 px-10"
      >
        {loginForm.map((obj, i) => {
          if (obj.name !== "confirm_password") {
            return (
              <Input
                key={obj.name + i}
                title={obj.title}
                name={obj.name}
                type={obj.type}
                placeholder={obj.placeholder}
                value={login[obj.name]}
                handleClick={handleChange}
              />
            );
          }
        })}
        <div className="my-2 text-red-900 ">{error}</div>
        <div className="my-2 text-sky-900 ">
          <NavLink to="/register" className="text">
            Register here
          </NavLink>
        </div>
        <Button
          btnName="Submit"
          classStyle={style.submitButton}
          handleFunction={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Login;
