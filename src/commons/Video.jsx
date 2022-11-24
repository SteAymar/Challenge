import { Box } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
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
        url="https://dbw7vamj238cm.cloudfront.net/Nebula_challenge.mp4"
        controls={true}
      />
    </Box>
  );
};

export default Video;
