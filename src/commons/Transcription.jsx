import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Transcription = ({ transcription }) => {

  //para no cambiar el Json origial reemplacé el tag <br> por <br/>
  const comment = transcription.replace(/<br>/g, "<br/>"); 
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "left",
        flexDirection: "column",
        width: "80%",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", mb: 4, fontSize: 24, color: "aliceblue" }}
      >
        TRANSCIPCIÓN
      </Typography>
      <Paper
        elevation={2}
        sx={{
          maxHeight: 300,
          overflow: "scroll",
          mb: 4,
        }}
      >
        <Typography>
          <span
            dangerouslySetInnerHTML={{ __html: `<p>${comment}</p>` }}
          ></span>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Transcription;
