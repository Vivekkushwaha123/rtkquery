import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import {
  Login,
  Register,
  Form,
  Table,
  Navbar,
  ViewBook,
  IssueFrom,
  IssuedBook,
} from "./components/index";
import { useGetUserQuery } from "./features/api";

function App() {
  const [isLoggined, setIsLoggined] = useState(
    localStorage.getItem("login") ? true : false
  );

  const [data, setData] = useState({});
  const getUser = useGetUserQuery();

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggined={isLoggined} />
        <Routes>
          <Route
            exact
            path="/addbook"
            element={
              <Form isLoggined={isLoggined} data={data} setData={setData} />
            }
          />
          <Route
            exact
            path="/"
            element={<Table setData={setData} getUser={getUser} />}
          />
          <Route
            exact
            path="/login"
            element={<Login setIsLoggined={setIsLoggined} />}
          />
          <Route exact path="/viewbook" element={<ViewBook data={data} />} />
          <Route exact path="/issuedbook" element={<IssuedBook />} />
          <Route exact path="/issuebook" element={<IssueFrom />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
