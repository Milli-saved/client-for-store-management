import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const BatchDetails = (props) => {
  let dataFetched = props.selectedBatch.selectedBatch;
  console.log(dataFetched);
  return (
    <Box style={{ width: "800px" }}>
      <Grid container>
        <Box>
          <Card style={{ width: "800px" }}>
            <CardContent>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h3" color="green">
                  Details about Batch
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Grid item xs={5} style={{ padding: "20px", marginLeft:"20px" }}>
          <Box>
            <TextField
              variant="outlined"
              name="batch_code"
              label="Batch Code"
              value="0001"
              fullWidth
              disabled
              margin="normal"
            />
            <TextField
              margin="normal"
              variant="outlined"
              name="creator"
              label="Created By"
              value={dataFetched.creator.firstName}
              fullWidth
              disabled
            />
            <TextField
              margin="normal"
              variant="outlined"
              name="store_id"
              label="Store"
              value={dataFetched.store_id.location}
              fullWidth
              disabled
            />
          </Box>
        </Grid>
        <Grid item xs={5} style={{ padding: "20px" }}>
          <TextField
            variant="outlined"
            name="product_id"
            label="Product Type"
            value={dataFetched.product_id.product_name}
            fullWidth
            margin="normal"
            disabled
          />
          <TextField
            variant="outlined"
            name="added_to_store"
            label="Is In Store?"
            value={dataFetched.added_to_store}
            fullWidth
            margin="normal"
            disabled
          />
          <TextField
            variant="outlined"
            name="createdAt"
            label="Time Stamps"
            value={dataFetched.createdAt}
            fullWidth
            margin="normal"
            disabled
          />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="secondary" >Return</Button>
        <Button variant="contained" color="error" >Okay</Button>
      </Box>
    </Box>
  );
};

export default BatchDetails;
