// Navigations.jsx
import { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText, useMediaQuery, useTheme, Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import i18n from "../common/components/LangConfig";

const Navigations = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const routes = [
    { path: "/", label: i18n.t("home") },
    { path: "/allProducts", label: "All Products"  },
    { path: "/contact", label: i18n.t("contact") },
    { path: "/about", label: i18n.t("about") },
  ];

  const currentRouteIndex = routes.findIndex(route => route.path === location.pathname);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      {isMobile ? (
        <>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon className="w-6 sm:w-8" />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} className="z-50">
            <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="px-5 py-20 w-60 bg-white h-screen flex flex-col justify-between">
              <List>
                {routes.map((route, index) => (
                  <ListItem button key={index} component={Link} to={route.path} onClick={toggleDrawer(false)}>
                    <ListItemText primary={route.label} />
                  </ListItem>
                ))}
              </List>
              <footer className="text-center py-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  © 2024 Huge Muscles. {i18n.t("footer.allRightsReserved")}
                </a>
              </footer>
            </motion.div>
          </Drawer>
        </>
      ) : (
        <div className="flex justify-center w-full">
          <div className="flex justify-center items-center w-full max-w-screen-xl mx-auto px-4">
            <Tabs
              value={currentRouteIndex !== -1 ? currentRouteIndex : false}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#f7af31",
                },
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {routes.map((route, index) => (
                <Tab
                  key={index}
                  label={route.label}
                  component={Link}
                  to={route.path}
                  sx={{
                    textTransform: "none",
                    fontSize: "16px",
                    "&.Mui-selected": {
                      color: "black",
                    },
                    "&:hover": {
                      color: "inherit",
                    },
                    px: 2,
                  }}
                />
              ))}
            </Tabs>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigations;
