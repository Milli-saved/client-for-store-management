import { Box, Card, Button, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/Reducer/ProductReducer";
import Loader from "../Global/Loader";
import "./index.css";

const Products = () => {
  const dispatch = useDispatch();
  const { products, fetchProductsLoading } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const columns = [
    { field: "", headerName: "", flex: 1 },
    { field: "", headerName: "", flex: 1 },
    { field: "", headerName: "", flex: 1 },
    { field: "", headerName: "", flex: 1 },
    { field: "", headerName: "", flex: 1 },
  ];

  return (
    <Box>
      <Card
        className="shadow"
        style={{ display: "flex", justifyContent: "center", margin: "13px" }}
      >
        <CardContent>
          <Typography variant="h3">Products</Typography>
        </CardContent>
      </Card>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="outlined" color="primary">
          Add Products
        </Button>
        <Button variant="outlined" color="warning">
          Add New Products
        </Button>
      </Box>
      {fetchProductsLoading ? <Loader /> : undefined}
    </Box>
  );
};

export default Products;
