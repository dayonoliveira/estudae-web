import { Box, Typography } from "@mui/material";

import Login from "./pages/Login";
import estudaeImg from "./assets/estudar.png";
import { useState } from "react";
import { Register } from "./pages/Register";

export default function App() {
  const [formType, setFormType] = useState<"login" | "register">("login");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "240px",          
        p: 0, 
        m: 0,                  
      }}
    >
      <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.05)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={estudaeImg}
            alt="Estudar"
            style={{
              width: "70%",
              maxWidth: "400px",
              marginBottom: "20px",
            }}
          />

          <Typography variant="h4" sx={{ color: "#000000", mb: 2 }}>
            Educação acessível começa com um gesto.
          </Typography>

          <Typography variant="subtitle1" sx={{ color: "#000000", fontSize: "20px" }}>
            Doe, empreste ou encontre o livro ideal para seu estudo.
          </Typography>
        </Box>
        {formType === "login" ? (<Login setFormType={setFormType}/>) : (<Register setFormType={setFormType}/>)}
    </Box>
  );
}
