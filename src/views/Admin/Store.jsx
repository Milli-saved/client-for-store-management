import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToStore from "../../components/AddToStore";
import { getAllStore } from "../../store/Reducer/StoreReducer";
import Loader from "../Global/Loader";
import AddToStorePopup from "../Global/Popup";
import "./index.css";

const Store = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStore());
  }, []);
  const [addToStore, setAddToStore] = useState(false);
  const { store, fetchStoreLoading, fetchStoreHasError } = useSelector(
    (state) => state.store
  );

  const columns = [
    { field: "store_name", headerName: "Store Name", flex: 1 },
    { field: "latitude", headerName: "Latitude", flex: 1 },
    { field: "longtude", headerName: "Longtude", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "createdAt", headerName: "Created At", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box width="60%" p="5px" display="flex">
            <Button variant="contained"> Details</Button>
          </Box>
        );
      },
    },
  ];

  const addNewStoreHandler = () => {
    setAddToStore(true);
  };

  return (
    <Box width="100%">
      <Card
        className="shadow"
        style={{ display: "flex", justifyContent: "center", margin: "13px" }}
      >
        <CardContent>
          <Typography variant="h3">Store</Typography>
        </CardContent>
      </Card>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="outlined" color="primary" onClick={addNewStoreHandler}>
          Add New Store
        </Button>
        <Button variant="outlined" color="error">
          Add New Store
        </Button>
      </Box>

      {fetchStoreLoading ? <Loader /> : undefined}
      {store ? (
        <DataGrid
          style={{ margin: "20px" }}
          getRowId={(row) => row._id}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight={true}
          columns={columns}
          rows={store}
        />
      ) : undefined}
      <AddToStorePopup openPopup={addToStore} setOpenPopup={setAddToStore}>
        <AddToStore />
      </AddToStorePopup>
    </Box>
  );
};

export default Store;
