import { Box,Button,Card, CardContent, Typography } from "@mui/material";
import Header from "../../components/Header";

const Batch = () => {
  return (
    <Box width="100%" >
      <Card style={{ display: "flex", justifyContent: "center", margin: "13px" }} >
        <CardContent>
          <Typography variant="h2" >Batch</Typography>
        </CardContent>
      </Card>
      <Box style={{ display: "flex", justifyContent: "space-around" }} >
        <Button variant="contained" color="success" >Add new Batch</Button>
        <Button variant="contained" color="error" >Remove Batch</Button>
      </Box>
    </Box>
  )
};

export default Batch;
