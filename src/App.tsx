// src/App.tsx
import React from "react";
import Home from "./components/Templates/Home";
import { Box, styled } from "@mui/material";

const AppContainer = styled(Box)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  padding: "20px",
}));

const App: React.FC = () => {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
};

export default App;
