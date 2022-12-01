import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import JohnDoe from "../Images/man.jpg";

const ProfileDetails = (props) => {
  const { user } = props;
  let currentUser = user.selectedUser;
  return (
    <Box style={{ width: "800px" }}>
      <Grid container>
        <Grid>
          <Card style={{ width: "800px" }}>
            <CardContent>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={JohnDoe}
                  alt="no internet connection"
                  width="120px"
                  height="auto"
                  style={{ borderRadius: "100px" }}
                />
              </Box>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Name: {currentUser.firstName} {currentUser.lastName}
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Job Role: {currentUser.accountType}
              </Typography>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  mT: "5px",
                }}
              >
                <IconButton size="large">
                  <Instagram />
                </IconButton>
                <IconButton size="large">
                  <Twitter />
                </IconButton>
                <IconButton size="large">
                  <LinkedIn />
                </IconButton>
              </Box>
              <Box style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
                <Button variant="contained" color="success">
                  Edit Profile
                </Button>
                <Button variant="contained" color="error">
                  Delete Profile
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ProfileDetails;
