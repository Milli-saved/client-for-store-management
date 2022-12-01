import { useState } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Global/Loader";
import {
  AdminPanelSettingsOutlined,
  StoreOutlined,
  AccountBoxOutlined,
} from "@mui/icons-material";
import { useEffect } from "react";
import { getAllUsers } from "../../store/Reducer/UserReducer";
import Alert from "../Global/Alert";
import Popup from "../Global/Popup";
import ProfileDetails from "../../components/ProfileDetails";
import "./index.css";


const ManageEmployee = () => {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const DetailButtonhandler = (row) => {
    console.log("this is selected.", row);
    setSelectedUser({
      ...selectedUser,
      selectedUser: row,
    });
    setOpenPopup(true);
  };

  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "accountType", headerName: "Account Type", flex: 1 },
    { field: "email", headerName: "Email", flex: 1.3 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            width="60%"
            // m="0 auto"
            p="5px"
            display="flex"
          >
            <Button onClick={() => DetailButtonhandler(row)}>
              {row.accountType === "admin" && <AdminPanelSettingsOutlined />}
              {row.accountType === "storemanager" && <StoreOutlined />}
              {row.accountType === "employee" && <AccountBoxOutlined />}
            </Button>
          </Box>
        );
      },
    },
  ];

  const { user, fetchUserLoading, fetchUserHasError, fetchUserError } =
    useSelector((state) => state.user);
  
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <Box width="100%">
      <Card className="shadow"
        style={{ display: "flex", justifyContent: "center", margin: "13px" }}
      >
        <CardContent>
          <Typography variant="h3">Manage Employees</Typography>
          <Typography
            style={{ marginLeft: "25px" }}
            varinat="h5"
            color="primary"
          >
            Can view access levels of employees.
          </Typography>
        </CardContent>
      </Card>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="outlined" color="primary">
          Add New Employee
        </Button>
        <Button variant="outlined" color="warning">
          Add New Employee
        </Button>
        <Button variant="outlined" color="error">
          Add New Employee
        </Button>
      </Box>
      <Box>
        {fetchUserLoading ? <Loader /> : undefined}
        {fetchUserHasError ? (
          <Alert text={fetchUserError} severity="error" />
        ) : undefined}
        {user ? (
          <DataGrid
            style={{ margin: "20px" }}
            getRowId={(row) => row._id}
            pageSize={5}
            rowsPerPageOptions={[5]}
            autoHeight={true}
            columns={columns}
            rows={user}
          />
        ) : undefined}
      </Box>
      <Popup
        // title="Employee Detail"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <ProfileDetails user={selectedUser} />
      </Popup>
    </Box>
  );
};

export default ManageEmployee;
