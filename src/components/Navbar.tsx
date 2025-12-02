import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { SearchBar } from "./SearchBar";
import { Matches } from "./Matches";
import { Account } from "./Account";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const Navbar = ({ user }: { user: any }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{ background: "#0b3a6d", padding: "6px 0", boxSizing: "border-box" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={() => setMenuOpen(true)}
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              sx={{
                fontWeight: 800,
                letterSpacing: 1,
                fontSize: "28px",
                color: "white",
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={() => navigate("/home")}
            >
              Estudae
            </Typography>
          </Box>

          <Box sx={{ flex: 1, mx: 2, maxWidth: { xs: "100%", sm: 400 } }}>
            <SearchBar />
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  color: "white",
                  userSelect: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onClick={() => navigate("/home")}
              >
                <HomeIcon />
                Home
              </Typography>
              <Matches />
              <Account user={user} />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} user={user} />
    </>
  );
};