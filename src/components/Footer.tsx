import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        background: "#000",
        padding: "20px 0",
        textAlign: "center",
        color: "#ddd",
        mt: 4,
        fontSize: { xs: "0.8rem", sm: "0.9rem" },
      }}
    >
      <Typography>
        Criado pela <strong>Equipe de Alunos Unifor</strong>
      </Typography>

      <Typography sx={{ mt: 1 }}>
        © {new Date().getFullYear()} — Todos os direitos reservados.
      </Typography>
    </Box>
  );
};
