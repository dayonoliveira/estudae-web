import { Box, Typography } from "@mui/material";
import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";

export const Matches = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  if (!user) return null;

  return (
    <Layout user={user}>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4">Encontros</Typography>

        <Typography variant="h6" sx={{ mt: 2, color: "#666" }}>
          Você não possui encontros marcados no momento.
        </Typography>
      </Box>
    </Layout>
  );
};
