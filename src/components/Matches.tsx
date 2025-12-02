import { Box, IconButton, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";

export const Matches = () => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate("/matches")}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        color: "white",
      }}
    >
      <IconButton sx={{ color: "white" }}>
        <CalendarMonthIcon fontSize="small" />
      </IconButton>

      <Typography sx={{ fontSize: { xs: "0.8rem", sm: "0.95rem" } }}>
        Encontros
      </Typography>
    </Box>
  );
};
