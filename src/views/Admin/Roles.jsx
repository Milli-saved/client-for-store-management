import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Loader from "../Global/Loader";
import "./index.css";

const Roles = () => {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 2000);
  return (
    <Box width="100%">
      <Card
        className="shadow"
        style={{ display: "flex", justifyContent: "center", margin: "13px" }}
      >
        <CardContent>
          <Typography variant="h3">Role</Typography>
        </CardContent>
      </Card>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="outlined" color="primary">
          Add New Role
        </Button>
        <Button variant="outlined" color="error">
          Add New Role
        </Button>
      </Box>

      {loader ? <Loader /> : undefined}
      {/* <DataGrid /> */}
    </Box>
  );
};

export default Roles;
