import { Box, Link, Paper, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import db from "../db/db.json";
import Tasks from "../commons/Tasks";
import Transcription from "../commons/Transcription";
import Video from "../commons/Video";


const Client = () => {
  const { name } = useParams();
  let client = db.find((e) => e.cliente === name);
  console.log("cliente--->", client.linkVideo);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent:"center"
      }}
    >
      <Typography variant="h3" color={"aliceblue"} sx={{ mb: 8, mt: 4 }}>
        {client.cliente.toUpperCase()}
      </Typography>
      <Video />
      <Link
        href={`${client.linkVideo}`}
        target="_blank"
        underline="none"
        sx={{ mt: 2, mb: 8 }}
      >
        <Typography variant="h7" color={"aliceblue"} sx={{ mb: 8 }}>
          Link Video
        </Typography>
      </Link>
      <Tasks client={client} />
      <Transcription client={client} />
    </Box>
  );
};

export default Client;
