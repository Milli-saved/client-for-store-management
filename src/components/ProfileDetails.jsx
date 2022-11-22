import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const ProfileDetails = (props) => {
  const { user } = props;
  console.log(user.selectedUser);
  return (
    <Box>
      <Grid container>
        <Grid>
          <Card sx={{ maxWidth: 800 }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Employee Details can be seen here.
              </Typography>
              <Box>
                <h1>hleloe</h1>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ProfileDetails;
