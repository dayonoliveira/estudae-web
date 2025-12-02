import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import { Matches } from "./Matches";
import { Account } from "./Account";
import { useNavigate } from "react-router-dom";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  user: any;
};

export const MobileMenu = ({ open, onClose, user }: MobileMenuProps) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Home",
      icon: <HomeIcon />,
      action: () => {
        navigate("/home");
        onClose();
      },
    },
    {
      label: "Encontros",
      component: <Matches />,
    },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 260,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "#0b3a6d",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
            Menu
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

        <List sx={{ flex: 1, py: 0 }}>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              onClick={() => {
                if (item.action) item.action();
              }}
              disableGutters
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
                px: 2.2,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              {item.icon ? (
                <>
                  <ListItemIcon
                    sx={{
                      color: "white",
                      minWidth: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      "& span": {
                        fontWeight: 500,
                        fontSize: "1.2rem",
                      },
                    }}
                  />
                </>
              ) : (
                <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
                  {item.component}
                </Box>
              )}
            </ListItemButton>
          ))}
        </List>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            p: 2,
            backgroundColor: "#0b3a6d",
          }}
        >
          <Account user={user} />
        </Box>
      </Box>
    </Drawer>
  );
};