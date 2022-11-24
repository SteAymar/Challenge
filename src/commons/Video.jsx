import { Box } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

const Video = ({url}) => {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "80%", md: "70%" },
        mb: 2,
      }}
    >
      <ReactPlayer
        width="100%"
        height="100%"
        url={url}
        controls={true}
      />
    </Box>
  );
};

export default Video;
