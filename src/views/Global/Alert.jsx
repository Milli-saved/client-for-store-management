import { useState } from "react";
import { Alert, Box, IconButton, Collapse } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

const HomeMadeAlert = ({ severity, text }) => {
  const [open, setOpen] = useState(true);
  return (
    <Box style={{display: "flex", justifyContent:"center" , marginRight:"100px", marginTop: "100px"}} >
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseOutlined />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {text}
        </Alert>
      </Collapse>
    </Box>
  );
};
export default HomeMadeAlert;
