import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Loader from "../Global/Loader";
import "./index.css";


const Roles = () => {
  return (
    <Box width="100%">
      <Card className="shadow"
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

      <Loader />
    </Box>
  );
};

export default Roles;
