import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        background: "#0b3a6d",
        padding: "20px 0",
        textAlign: "center",
        color: "#fff",
        mt: 4
      }}
    >
      <Typography variant="body1">
        Criado pela <strong>Equipe de Alunos Unifor</strong>
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} — Todos os direitos reservados.
      </Typography>
    </Box>
  );
};
