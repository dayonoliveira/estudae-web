import { Box, Typography } from "@mui/material";
import estudaeImg from "./assets/estudar.png";
import { useState } from "react";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

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
        gap: { xs: 0, md: 15, lg: 30 },
        overflowX: "hidden",
        backgroundColor: "background.default",
        padding: { xs: 2, sm: 3 },
        maxWidth: "100vw",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" }, 
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "450px",
        }}
      >
        <img
          src={estudaeImg}
          alt="Estudar"
          style={{
            width: "100%",
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
      <Box sx={{ width: { xs: "100%", md: "auto" }, display: "flex", justifyContent: "center" }}>
        {formType === "login" ? (
          <Login setFormType={setFormType} />
        ) : (
          <Register setFormType={setFormType} />
        )}
      </Box>
    </Box>
  );
}