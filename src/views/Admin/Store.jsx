import { Box, Button ,Card, CardContent, Typography } from "@mui/material";
import Loader from "../Global/Loader";
import "./index.css"

const Store = () => {
  return (
    <Box width="100%">
      <Card className="shadow"
        style={{ display: "flex", justifyContent: "center", margin: "13px" }}
      >
        <CardContent>
          <Typography variant="h3">Store</Typography>
        </CardContent>
      </Card>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="outlined" color="primary">
          Add New Store
        </Button>
        <Button variant="outlined" color="error">
          Add New Store
        </Button>
      </Box>

      <Loader />

    </Box>
  );
};

export default Store;
