import { Box, Typography } from "@mui/material";
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
        cursor: "pointer",
        color: "white",
      }}
    >
      <Box
        sx={{
          color: "white",
          minWidth: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CalendarMonthIcon />
      </Box>

      <Typography sx={{ fontSize: { xs: "1.1rem", sm: "1.1rem" } }}>
        Encontros
      </Typography>
    </Box>
  );
};