import { Box, Card, CardContent, Typography } from "@mui/material";
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

const columns = [
  { field: "firstName", headerName: "First Name", flex: 1 },
  { field: "lastName", headerName: "Last Name", flex: 1 },
  { field: "accountType", headerName: "Account Type", flex: 1 },
  { field: "email", headerName: "Email", flex: 1.3 },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: ({ row: { accountType } }) => {
      return (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
        >
          {accountType === "admin" && <AdminPanelSettingsOutlined />}
          {accountType === "storemanager" && <StoreOutlined />}
          {accountType === "employee" && <AccountBoxOutlined />}
        </Box>
      );
    },
  },
];

const ManageEmployee = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  const { user, fetchUserLoading, fetchUserHasError, fetchUserError } =
    useSelector((state) => state.user);

  return (
    <Box width="100%">
      <Card
        style={{ display: "flex", justifyContent: "center", margin: "13px" }}
      >
        <CardContent>
          <Typography variant="h3">Manage Employees</Typography>
          <span>Can view access levels of employees.</span>
        </CardContent>
      </Card>
      <Box>
        {fetchUserLoading ? <Loader /> : undefined}
        {fetchUserHasError ? <Alert text={fetchUserError} severity="error" /> : undefined}
        {user ? (
          <DataGrid
            style={{ margin: "20px" }}
            getRowId={(row) => row._id}
            pageSize={5}
            rowsPerPageOptions={[5]}
            autoHeight="true"
            columns={columns}
            rows={user}
          />
        ) : undefined}
      </Box>
    </Box>
  );
};

export default ManageEmployee;
