import ReactLoading from "react-loading";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        marginRight: "100px",
        marginTop: "100px"
      }}
    >
      <ReactLoading type="spinningBubbles" color="#000000" />
    </Box>
  );
};

export default Loader;
