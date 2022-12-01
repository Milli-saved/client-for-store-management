import { Box, IconButton } from "@mui/material";

import {
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutline,
} from "@mui/icons-material";

import Logo from "../../Images/danenergylogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/Reducer/UserReducer";
import { useEffect } from "react";

const Topbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.user);

  const logOutHandler = () => {
    localStorage.removeItem("authorization");
    dispatch(logOut());
    navigate("/");
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

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
        <IconButton onClick={logOutHandler} style={{ color: "grey" }}>
          {/* <Link to="/" style={{ color: "grey" }}> */}
          <PersonOutline />
          {/* </Link> */}
        </IconButton>
      </Box>
    </div>
  );
};

export default Topbar;
