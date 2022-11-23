import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Transcription = ({ client }) => {

    const trans = client.transcripcion
    const comment = trans.replace(/<br>/g, '<br/>');
  return (
    <Box sx={{
        textAlign:"left"
    }}>
      <Typography  sx={{fontWeight:"bold", mb: 4, fontSize:24, color:"aliceblue"}}>TRANSCIPCIÓN</Typography>
      <Paper
        elevation={2}
        sx={{
          maxWidth: 1200,
          maxHeight: 300,
          overflow: "scroll",
          mb:4,
        }}
      >
        <Typography><span dangerouslySetInnerHTML={{__html: `<p>${comment}</p>`}}></span></Typography>
      </Paper>
    </Box>
  );
};

export default Transcription;
