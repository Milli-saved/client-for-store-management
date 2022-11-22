import { Box } from "@mui/material";

import Topbar from "../Global/Topbar";
import Sidebar from "../Global/Sidebar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <Box>
      <Topbar style={{ position: "fixed" }} />

      <Box style={{ display: "flex" }}>
        <Sidebar />
        <Box style={{ marginLeft: "10px", width:"100%"}}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
