import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { SearchBar } from "./SearchBar";
import { Matches } from "./Matches";
import { Account } from "./Account";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ user }: { user: any }) => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ background: "#0b3a6d", padding: "6px 0" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            cursor: "pointer",
            color: "white",
            mr: 4,
          }}
          onClick={() => navigate("/home")}
        >
          <Typography
            sx={{
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: "32px",
              userSelect: "none",
            }}
          >
            Estudae
          </Typography>
        </Box>

        <SearchBar />

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
              gap: "16px"

            }}
            onClick={() => navigate("/home")}
          >
          <HomeIcon />
            Home
          </Typography>
          <Matches />
          <Account user={user} />
        </Box>

      </Toolbar>
    </AppBar>
  );
};
