import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import { Stack } from "@mui/material";
import Client from "./components/Client";

function App() {
  return (
    <Stack>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/client/:name" element={<Client />} />
      </Routes>
    </Stack>
  );
}

export default App;
