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
        padding: 2,
        zIndex: 2000,
      }}
    >
      <Paper
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: "100%",
          maxWidth: 420,
          padding: 3,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {user.name}
        </Typography>

        <Typography><strong>Instituição:</strong> {user.institution}</Typography>
        <Typography><strong>Tipo de usuário:</strong> {user.role}</Typography>
        <Typography><strong>Telefone:</strong> {user.phone}</Typography>

        <Typography sx={{ mt: 3, mb: 2 }}>
          Para realizar a doação, entre em contato com este usuário pelo telefone fornecido.
        </Typography>

        <Button
          fullWidth
          sx={{ mt: 1 }}
          variant="outlined"
          onClick={onClose}
        >
          Fechar
        </Button>
      </Paper>
    </Box>
  );
};
