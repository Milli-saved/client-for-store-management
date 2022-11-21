import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import Header from "../../components/Header";
import Empowering from "../../Images/empowering.png";

const initialValues = {
  email: "",
  password: "",
};
const dataSchema = yup.object().shape({
  email: yup.string().email().required("Required."),
  password: yup.string().required("Required."),
});

function Login() {
  const onSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Box style={{ border: "2px solid", borderRadius:"40px" }} marginTop="140px" padding="40px">
            <Header title="Login" />
            <Formik
              onSubmit={onSubmitHandler}
              initialValues={initialValues}
              validationSchema={dataSchema}
            >
              {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Box m="20px" display="grid" gap="30px">
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      error={!!errors.email}
                      helperText={errors.email}
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="password"
                      label="Password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      error={!!errors.password}
                      helperText={errors.password}
                      sx={{ gridColumn: "span 4" }}
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" mt="20px">
                    <Button type="submit" color="primary" variant="outlined">
                      Login
                    </Button>
                    <Button variant="">Forgot Password</Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Box>
  );
}

export default Login;
