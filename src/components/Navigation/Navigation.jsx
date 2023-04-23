import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify-icons/mdi/menu";
import closeIcon from "@iconify-icons/mdi/close";

export const Navigation = ({ content: navigationContent }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const handleListItemClick = (item) => {
    setScrollTarget(item.sectionRef);
    toggleMenu();
  };

  useEffect(() => {
    if (scrollTarget) {
      scrollTarget.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTarget]);

  return (
    <Box sx={{ pt: 3, width: "100%" }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: isMobile ? "white" : "transparent",
          boxShadow: "none",
          alignItems: "flex-end",
          width: "100%",
          pt: isMobile ? 1 : 3,
        }}
      >
        <IconButton
          color="inherit"
          onClick={toggleMenu}
          sx={{
            fontSize: isMobile ? "32px" : "40px",
            width: "fit-content",
            mr: isMobile ? "24px" : "50px",
            padding: isMobile ? "10px" : "15px",
          }}
        >
          <Icon icon={menuIcon} style={{ color: "#191970" }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={toggleMenu}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: isMobile ? "290px" : "500px",
              pt: isMobile ? "90px" : "100px",
            },
          }}
        >
          <IconButton
            color="inherit"
            onClick={toggleMenu}
            sx={{
              fontSize: isMobile ? "32px" : "40px",
              width: "fit-content",
              padding: isMobile ? "10px" : "15px",
              position: "absolute",
              top: isMobile ? "10px" : "25px",
              right: isMobile ? "24px" : "50px",
            }}
          >
            <Icon icon={closeIcon} style={{ color: "#191970" }} />
          </IconButton>
          <List>
            {navigationContent.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => handleListItemClick(item)}
                sx={{ padding: 0 }}
              >
                <ListItemButton
                  disableGutters
                  sx={{
                    fontSize: isMobile ? "18px" : "22px",
                    color: "text.secondary",
                    padding: isMobile ? "15px 60px" : "20px 80px",
                    fontWeight: 600,
                    letterSpacing: 1.2,
                  }}
                >
                  {" "}
                  <ListItemText disableTypography primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </Box>
  );
};
