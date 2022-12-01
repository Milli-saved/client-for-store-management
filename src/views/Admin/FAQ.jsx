import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import Loader from "../Global/Loader";
import "./index.css";


const FAQ = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 3000);
  return (
    <Box width="100%">
      <Card
        className="shadow"
        style={{ display: "flex", justifyContent: "center", margin: "13px" }}
      >
        <CardContent>
          <Typography variant="h3">FAQ</Typography>
        </CardContent>
      </Card>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="outlined" color="primary">
          Add FAQ
        </Button>
        <Button variant="outlined" color="error">
          Remove FAQ
        </Button>
      </Box>

      {loader ? <Loader /> : undefined}
      {!loader ? (
        <Card style={{ margin: "10px", background: "#f7f6f2" }}>
          <CardContent>
            <Accordion defaultExpanded sx={{ margin: "10px 0" }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography color="grey" variant="h5">
                  An Important Question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, nemo?
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ margin: "10px 0" }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography color="grey" variant="h5">
                  Another Important Question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, nemo?
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ margin: "10px 0" }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography color="grey" variant="h5">
                  You'r favorite question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, nemo?
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ margin: "10px 0" }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography color="grey" variant="h5">
                  Some random question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, nemo?
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ margin: "10px 0" }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography color="grey" variant="h5">
                  The final question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, nemo?
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      ) : undefined}
    </Box>
  );
};

export default FAQ;
