import { Box, Paper, Typography, Button } from "@mui/material";

export const UserPopup = ({ user, onClose }: any) => {
  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 2, sm: 3 },
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
          maxWidth: { xs: 300, sm: 360, md: 420 },
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
            fontSize: { xs: "1.2rem", sm: "1.4rem" },
          }}
        >
          {user.name}
        </Typography>

        <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          <strong>Instituição:</strong> {user.institution}
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          <strong>Tipo de usuário:</strong> {user.role}
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          <strong>Telefone:</strong> {user.phone}
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mb: 2,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            textAlign: "center",
          }}
        >
          Para realizar a doação, entre em contato com este usuário pelo
          telefone fornecido.
        </Typography>

        <Button
          fullWidth
          sx={{
            mt: 1,
            fontSize: { xs: "0.85rem", sm: "1rem" },
            py: { xs: 1, sm: 1.2 },
          }}
          variant="outlined"
          onClick={onClose}
        >
          Fechar
        </Button>
      </Paper>
    </Box>
  );
};