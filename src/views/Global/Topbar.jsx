import { Box, IconButton } from "@mui/material";

import {
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutline,
} from "@mui/icons-material";

import Logo from "../../Images/danenergylogo.png";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div
      style={{
        padding: "2px",
        borderBottom: "2px solid #737d80",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box marginTop="10px" marginLeft="20px">
        <img
          style={{
            width: "70px",
            heigh: "auto",
          }}
          src={Logo}
          alt="no connection"
        />
      </Box>
      <Box style={{ marginTop: "10px" }}>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <Link to="/admin/editprofile" style={{ color: "grey" }}>
            <SettingsOutlined />
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/" style={{ color: "grey" }}>
            <PersonOutline />
          </Link>
        </IconButton>
      </Box>
    </div>
  );
};

export default Topbar;
