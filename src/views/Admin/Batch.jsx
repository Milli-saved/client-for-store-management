import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Loader from "../Global/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBatches } from "../../store/Reducer/BatchReducer";
import { DataGrid } from "@mui/x-data-grid";
import Popup from "../Global/Popup";
import "./index.css";
import BatchDetails from "../../components/BatchDetails";

const Batch = () => {
  const dispatch = useDispatch();
  const { batch, fetchBatchLoading, fetchBatchHasError, fetchBatchError } =
    useSelector((state) => state.batch);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);

  const DetailButtonHandler = (row) => {
    // console.log(row);
    setSelectedBatch({
      ...selectedBatch,
      selectedBatch: row,
    });
    setOpenPopup(true);
  };

  const columns = [
    { field: "batch_code", headerName: "Batch Code", flex: 1 },
    { field: "creator", headerName: "Created By", flex: 1 },
    { field: "store_id", headerName: "Store", flex: 1 },
    { field: "product_id", headerName: "Product", flex: 1 },
    { field: "added_to_store", headerName: "Added to store", flex: 1 },
    {
      field: "action",
      headerName: "Details",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box width="60%" p="5px" display="flex">
            <Button onClick={() => DetailButtonHandler(row)}>Details</Button>
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getAllBatches());
  }, []);
  return (
    <Box width="100%">
      <Card
        className="shadow"
        style={{ display: "flex", justifyContent: "center", margin: "13px" }}
      >
        <CardContent>
          <Typography variant="h2">Batch</Typography>
        </CardContent>
      </Card>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="contained" color="success">
          Add new Batch
        </Button>
        <Button variant="contained" color="error">
          Remove Batch
        </Button>
      </Box>
      {fetchBatchLoading ? <Loader /> : undefined}
      {batch ? (
        <DataGrid
          style={{ margin: "20px" }}
          getRowId={(row) => row._id}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight={true}
          columns={columns}
          rows={batch}
        />
      ) : undefined}
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <BatchDetails selectedBatch={selectedBatch} />
      </Popup>
    </Box>
  );
};

export default Batch;
