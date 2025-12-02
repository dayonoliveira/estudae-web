import { Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "4px 10px",
        width: "100%",
        background: "white",
        borderRadius: "12px",
      }}
    >
      <SearchIcon sx={{ color: "#555", fontSize: { xs: 20, sm: 24 } }} />
      <InputBase
        placeholder="Buscar usuários..."
        sx={{
          marginLeft: 1,
          flex: 1,
          fontSize: { xs: "0.85rem", sm: "1rem" },
        }}
      />
    </Paper>
  );
};
