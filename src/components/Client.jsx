import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useParams, Link } from "react-router-dom";
import db from "../db/db.json";
import Tasks from "../commons/Tasks";
import Transcription from "../commons/Transcription";
import Video from "../commons/Video";

const Client = () => {
  const { name } = useParams();
   let client = db.find((e) => e.cliente === name);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        mt: 4,
      }}
    >
      
      <Typography variant="h3" color={"aliceblue"} sx={{ mb: 8, mt: 4 }}>
        {client.cliente.toUpperCase()}
      </Typography>
      <Video url={client.linkVideo} />
      <Link
        href={`${client.linkVideo}`}
        target="_blank"
        underline="none"
        sx={{ mt: 2, mb: 8 }}
      >
        <Typography variant="h7" color={"aliceblue"}>
          Link Video
        </Typography>
      </Link>
      <Tasks tasks={client.preguntas} />
      <Transcription transcription={client.transcripcion} />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            my:4,
            backgroundColor: "#E56A97",
            ":hover": {
              backgroundColor: "#D4145A",
            },
          }}
        >
          VOLVER
        </Button>
      </Link>
    </Box>
  );
};

export default Client;
