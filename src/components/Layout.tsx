import { Box } from "@mui/material";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children, user }: any) => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      <Navbar user={user} />

      <Box sx={{ flex: 1 }}>
        {children}
      </Box>

      <Footer />

    </Box>
  );
};
