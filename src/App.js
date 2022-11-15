import "./App.css";
import { Heading, Form, Table } from "./components/index";
import { useState } from "react";
import { useGetUserQuery } from "./features/api";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
    isEligible: "",
    isEditing: "",
  });

  const getUser = useGetUserQuery();

  return (
    <div className="App">
      <Heading title="Employee Data" />
      <Form data={data} setData={setData} />
      <Table setData={setData} getUser={getUser} />
    </div>
  );
}

export default App;
