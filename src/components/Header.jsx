import { Box, Typography } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        color="#3e423f"
        fontWetigh="bold"
        sx={{ m: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color="#292b29" sx={{ m: "5px" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
