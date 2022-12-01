import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
const AddToStore = () => {
  const initialValues = {
    store_name: "",
    latitude: "",
    longude: "",
    location: "",
  };
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box>
      <Card
        style={{ display: "flex", justifyContent: "center", margin: "13px" }}
      >
        <CardContent>
          <Typography variant="h3" color="slategrey">
            Add New Store Locations
          </Typography>
        </CardContent>
      </Card>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
          >
              {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                      <Box m="20px" display="grid" gap="30px" gridTemplateColumns="repeat(4,minmax(0,1fr"
                      >
                          <TextField fullWidth variant="outlined" type="text" label="Store Name" name="store_name" />
                    </Box>
                  </form>
              )}
      </Formik>
    </Box>
  );
};
export default AddToStore;
