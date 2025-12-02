import { Box, TextField, Typography, Button, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { formatPhone } from "../utils/formatPhone";

export const UserCard = ({ onClose }: { onClose: () => void }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setData(JSON.parse(saved));
  }, []);

  const handleChange = (field: string, value: string) => {
    setData((prev: any) => ({
      ...prev,
      [field]: field === "phone" ? formatPhone(value) : value,
    }));
  };

  const saveChanges = () => {
    localStorage.setItem("user", JSON.stringify(data));
    onClose();
  };

  if (!data) return null;

  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100vh",
        bgcolor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 2, md: 0 },
        zIndex: 2000,
        overflowY: "auto",
        transform: "translateX(-15px)",
        "@media (min-width: 600px)": {
          transform: "none",
        },
      }}
    >
      <Paper
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: "100%",
          maxWidth: { xs: 320, sm: 380, md: 420 },
          padding: { xs: 2, sm: 3 },
          borderRadius: 3,
          position: "relative",
          maxHeight: { xs: "90vh", md: "auto" },
          overflowY: "auto",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            textAlign: "center",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          Meu Perfil
        </Typography>

        <TextField
          label="Nome completo"
          fullWidth
          margin="normal"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <TextField
          label="Telefone"
          fullWidth
          margin="normal"
          value={data.phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <TextField
          label="Instituição"
          fullWidth
          margin="normal"
          value={data.institution}
          onChange={(e) => handleChange("institution", e.target.value)}
        />

        <TextField
          label="Tipo de usuário"
          fullWidth
          margin="normal"
          value={data.role}
          onChange={(e) => handleChange("role", e.target.value)}
        />

        <Button
          variant="contained"
          sx={{
            mt: 2,
            fontSize: { xs: "0.85rem", sm: "1rem" },
            py: { xs: 1, sm: 1.2 },
          }}
          fullWidth
          onClick={saveChanges}
        >
          Salvar alterações
        </Button>
      </Paper>
    </Box>
  );
};