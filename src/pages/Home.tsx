import { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Layout } from "../components/Layout";

export const Home = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  if (!user) return null;

  return (
    <Layout user={user}>
      <Box sx={{ padding: 4 }}>

        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Bem-vindo(a), {user.name}! 👋
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 500 }}>
          Aqui aparecerão outros alunos da instituição <strong>{user.institution}</strong>.
        </Typography>

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 4 }}>

          <Paper sx={{ padding: 3, borderRadius: 3, width: 300 }}>
            <Typography variant="h6">Usuários próximos</Typography>
            <Typography sx={{ mt: 1, color: "#555" }}>
              Veja alunos ou doadores da sua instituição.
            </Typography>
          </Paper>

          <Paper sx={{ padding: 3, borderRadius: 3, width: 300 }}>
            <Typography variant="h6">Livros disponíveis</Typography>
            <Typography sx={{ mt: 1, color: "#555" }}>
              Explore livros que outros usuários estão oferecendo.
            </Typography>
          </Paper>

          <Paper sx={{ padding: 3, borderRadius: 3, width: 300 }}>
            <Typography variant="h6">Encontros</Typography>
            <Typography sx={{ mt: 1, color: "#555" }}>
              Veja ou agende encontros para entregar livros.
            </Typography>
          </Paper>

        </Box>

      </Box>
    </Layout>
  );
};
