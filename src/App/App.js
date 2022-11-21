import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import OutLet from "../views/Outlet/index";
import Login from "../views/Login";
import Admin from "../views/Admin";
import DeptHead from "../views/Dept-Head";
import Employee from "../views/Employee";
import Finance from "../views/Finance";
import Storekeeper from "../views/StoreKeeper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OutLet />}>
          <Route path="" element={<Login />} />
        </Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/depthead" element={<DeptHead />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/finance" element={<Finance />}></Route>
        <Route path="/storekeeper" element={<Storekeeper />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
