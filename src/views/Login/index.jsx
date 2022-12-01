import {
  Box,
  Button,
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./index.css";
import BgPic from "../../Images/world.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/Reducer/UserReducer";

const initialValues = {
  email: "",
  password: "",
};
const dataSchema = yup.object().shape({
  email: yup.string().email().required("Required."),
  password: yup.string().required("Required."),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, currentUser, loginLoading, loginHasError, loginError } =
    useSelector((state) => state.user);

  const onSubmitHandler = (values) => {
    console.log(values);
    dispatch(logIn(values));
    // navigate("/admin");
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("authorization", token)
      switch (currentUser.accountType) {
        case "admin":
          navigate("/admin")
          break
        case "storemanager":
          navigate("/storekeeper");
      }
    }
  },[token])

  return (
    <Box style={{ height: "100%", backgroundImage: `url(${BgPic})` }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                maxWidth: 500,
                marginTop: "20%",
                marginLeft: "100px",
                padding: "40px",
              }}
              className="shadow"
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  style={{ marginLeft: "130px" }}
                >
                  Login
                </Typography>
                <Box>
                  <Formik
                    onSubmit={onSubmitHandler}
                    initialValues={initialValues}
                    validationSchema={dataSchema}
                  >
                    {({
                      values,
                      errors,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                    }) => (
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
                        <Box
                          display="flex"
                          justifyContent="space-around"
                          m="20px"
                        >
                          <Button
                            type="submit"
                            color="primary"
                            variant="outlined"
                            style={{ marginRight: "20px" }}
                          >
                            Login
                          </Button>
                          <Button size="small">Forgot Password</Button>
                        </Box>
                      </form>
                    )}
                  </Formik>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>
      <Typography style={{ marginTop: "198px" }}>.</Typography>
    </Box>
  );
};

export default Login;
