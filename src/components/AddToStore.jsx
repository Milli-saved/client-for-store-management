import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
const AddToStore = () => {
  const initialValues = {
    store_name: "",
    latitude: "",
    longtude: "",
    location: "",
  };
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box style={{ width: "800px" }}>
      <Card
        style={{ display: "flex", justifyContent: "center", margin: "13px" }}
      >
        <CardContent>
          <Typography variant="h3" color="slategrey">
            Add New Store Locations
          </Typography>
        </CardContent>
      </Card>
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              m="20px"
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4,minmax(0,1fr"
            >
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Store Name"
                name="store_name"
                value={values.store_name}
                onChange={handleChange}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                label="Latitude"
                value={values.latitude}
                name="latitude"
                onChange={handleChange}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                label="Longtude"
                value={values.longtude}
                name="longtude"
                onChange={handleChange}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Location"
                value={values.location}
                name="location"
                onChange={handleChange}
                sx={{ gridColumn: "span 4" }}
              />
              <Box style={{ display: "flex", justifyContent: "space-around" }}>
                <Button type="submit" color="success" variant="outlined">
                  Submit Form
                </Button>
                <Button color="error" variant="outlined">
                  Reset
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default AddToStore;
