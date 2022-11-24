import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import db from "../db/db.json";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection:{xs:"column", sm:"column",md:"row",},
      }}
    >
      {db.map((e) => {
        return (
          <Card
            sx={{
              maxWidth: 300,
              maxHeight: 200,
              m:4,
              transition: "transform 0.3s ease-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
            key={e.cliente}
          >
            <CardContent sx={{height:"70%"}}>
              <Typography gutterBottom variant="h5" component="div">
                {e.cliente.toUpperCase()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {e.escenario}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/client/${e.cliente}`} style={{ textDecoration: "none"}} >
              <Button variant="contained" size="small" sx={{backgroundColor:"#E56A97", ":hover":{
                backgroundColor:"#D4145A"
              }}}>
                IR A TEST
              </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default Cards;
