import { useState } from "react";
import { Box, Card, CardContent, Button, Typography } from "@mui/material";
import Loader from "../Global/Loader";
import Chart from "../../components/Chart/Chart";
import "./index.css";

import { userData } from "../../service/chartData";

const Dashboard = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 3000);
  return (
    <Box width="100%">
      <Card className="shadow"
        style={{ display: "flex", justifyContent: "center", margin: "18px" }}
      >
        <CardContent>
          <Typography variant="h3">Dashboard</Typography>
        </CardContent>
      </Card>
      {/* <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="outlined" color="primary">
          Add New Store
        </Button>
        <Button variant="outlined" color="error">
          Add New Store
        </Button>
      </Box> */}

      {loader ? <Loader /> : undefined}

      {!loader ? (
        <Box>
          <Chart
            title="Company Analytics"
            dataCol={userData}
            dataKey="activeUser"
          />
        </Box>
      ) : undefined}
    </Box>
  );
};

export default Dashboard;
