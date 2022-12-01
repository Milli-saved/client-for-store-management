import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import OutLet from "../views/Outlet/index";
import Login from "../views/Login";
import Admin from "../views/Admin";
import DeptHead from "../views/Dept-Head";
import Employee from "../views/Employee";
import Finance from "../views/Finance";
import Storekeeper from "../views/StoreKeeper";
import { Box, CssBaseline } from "@mui/material";
import Dashboard from "../views/Admin/Dashboard";
import ManageEmployee from "../views/Admin/ManageEmployees";
import Roles from "../views/Admin/Roles";
import Store from "../views/Admin/Store";
import Report from "../views/Admin/Report";
import FAQ from "../views/Admin/FAQ";
import EditProfile from "../views/Admin/EditProfile";
import Batch from "../views/Admin/Batch";
import Products from "../views/Admin/Products";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box className="app">
        <Routes>
          <Route path="/" element={<OutLet />}>
            <Route path="" element={<Login />} />
          </Route>
          <Route path="/admin" exact element={<Admin />}>
            <Route path="" element={<Dashboard />} />
            <Route path="manageemp" element={<ManageEmployee />} />
            <Route path="roles" element={<Roles />} />
            <Route path="store" element={<Store />} />
            <Route path="report" element={<Report />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="editprofile" element={<EditProfile />} />
            <Route path="batch" element={<Batch />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="/depthead" element={<DeptHead />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/finance" element={<Finance />}></Route>
          <Route path="/storekeeper" element={<Storekeeper />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
