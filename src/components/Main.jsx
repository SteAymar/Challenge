import React from "react";
import { Box, Typography } from "@mui/material";
import Cards from "../commons/Cards";

const Main = () => {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:"center",
          textAlign:{xs:"center", sm:"center"},
          height:"100vh"
        }}
      >
        <Typography variant="h3" color={"aliceblue"} sx={{ mb: 6 }}>
          Elige el cliente deseado
        </Typography>
        <Box>
          <Cards />
        </Box>
      </Box>
    </>
  );
};

export default Main;
