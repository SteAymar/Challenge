import {
  Box,
  Card,
  cardActionAreaClasses,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { maxHeight } from "@mui/system";

const Tasks = ({ client }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log("tareas-->", client);
  return (
    <Box
      sx={{
        width: "80%",
        my: 8,
      }}
    >
      <Typography
        component="div"
        sx={{ fontWeight: "bold", mb: 4, fontSize: 24, color: "aliceblue" }}
      >
        TAREAS
      </Typography>
      <Slider {...settings}>
        {client.preguntas.map((e, i) => {
          let contador = 0;
          const trans = e.texto;
          const comment = trans.replace(/\\n/g, "<br/>");
          return (
            <div>
              <Card
                key={i}
                sx={{ maxWidth: "100%", maxHeight: "auto", mx: "3%" }}
              >
                <CardContent>
                  <Typography
                    component="div"
                    sx={{ fontWeight: "bold", mb: 1.5, fontSize: 24 }}
                  >
                    Tarea N°: {i + 1}
                  </Typography>
                  <Typography component="div" sx={{ mb: 1.5, fontSize: 18 }}>
                    <span
                      dangerouslySetInnerHTML={{ __html: `<p>${comment}</p>` }}
                    ></span>
                  </Typography>
                  {e.respuesta.length == 1 && (
                    <Typography sx={{ mb: 1.5, fontSize: 16 }}>
                      Respuesta: {e.respuesta}
                    </Typography>
                  )}
                  <Typography sx={{ mb: 1.5, fontSize: 14, color: "red" }}>
                    Tiempo: {e.tiempo}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </Slider>
    </Box>
  );
};

export default Tasks;
