import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { addNewStore, getAllStore } from "../store/Reducer/StoreReducer";

const AddToStore = (props) => {
  const { close } = props;
  const dispatch = useDispatch();
  const initialValues = {
    store_name: "",
    latitude: "",
    longtude: "",
    location: "",
  };

  const storeSchema = yup.object().shape({
    store_name: yup.string().required("Required"),
    latitude: yup.number().required("Required."),
    longtude: yup.number().required("Required."),
    location: yup.string().required("Required."),
  });

  const handleFormSubmit = (values) => {
    dispatch(addNewStore(values));
    setTimeout(() => {
      dispatch(getAllStore());
    }, 3000);
    dispatch(getAllStore());
    close(false);
  };
  const handleRestButton = () => {};
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
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={storeSchema}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
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
                error={!!errors.store_name}
                helperText={errors.store_name}
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
                error={!!errors.latitude}
                helperText={errors.latitude}
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
                error={!!errors.longtude}
                helperText={errors.longtude}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Location"
                value={values.location}
                name="location"
                error={!!errors.location}
                helperText={errors.location}
                onChange={handleChange}
                sx={{ gridColumn: "span 4" }}
              />
              <Box style={{ display: "flex", justifyContent: "space-around" }}>
                <Button type="submit" color="success" variant="outlined">
                  Submit Form
                </Button>
                <Button
                  onClick={handleRestButton}
                  color="error"
                  variant="outlined"
                >
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
