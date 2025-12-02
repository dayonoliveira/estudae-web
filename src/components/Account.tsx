import { Avatar, Box, Typography, Paper } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { UserCard } from "./UserCard";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const getInitials = (name: string) => {
  const parts = name.split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (
    parts[0][0].toUpperCase() +
    parts[parts.length - 1][0].toUpperCase()
  );
};

export const Account = ({ user }: { user: any }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCard, setOpenCard] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);

    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Box sx={{ position: "relative" }} ref={menuRef}>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
          color: "white",
        }}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <Avatar sx={{ bgcolor: "#666", width: 36, height: 36 }}>
          {user ? getInitials(user.name) : "?"}
        </Avatar>

        <Typography sx={{ fontSize: { xs: "0.8rem", sm: "0.95rem" } }}>
          Conta
        </Typography>
      </Box>

      {openMenu && (
        <Paper
          sx={{
            position: "absolute",
            top: "48px",
            right: 0,
            width: 180,
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
            zIndex: 30,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              padding: "12px 18px",
              cursor: "pointer",
              "&:hover": { background: "#f5f5f5" },
            }}
            onClick={() => {
              setOpenCard(true);
              setOpenMenu(false);
            }}
          >
            Ver dados
          </Box>

          <Box sx={{ height: "1px", background: "#ddd" }} />

          <Box
            sx={{
              padding: "12px 18px",
              cursor: "pointer",
              color: "red",
              display: "flex",
              gap: 1,
              alignItems: "center",
              "&:hover": { background: "#ffe6e6" },
            }}
            onClick={logout}
          >
            <LogoutIcon fontSize="small" />
            Sair
          </Box>
        </Paper>
      )}

      {openCard && <UserCard onClose={() => setOpenCard(false)} />}
    </Box>
  );
};
