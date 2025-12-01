import { Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "4px 10px",
        width: "45%",
        background: "white",
        borderRadius: "12px",
      }}
    >
      <SearchIcon sx={{ color: "#555" }} />
      <InputBase
        placeholder="Buscar usuários..."
        sx={{ marginLeft: 1, flex: 1 }}
      />
    </Paper>
  );
};
