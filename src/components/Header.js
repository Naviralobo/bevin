import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Collapse,
  MenuItem,
} from "@mui/material";
import { FaBars } from "react-icons/fa";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useMediaQuery } from "@mui/material";
import Logo from "./Logo";
import ContactModal from "./ContactModal";

const Header = ({ sections }) => {
  const [value, setValue] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width:960px)");

  const handleScroll = (index) => {
    if (index === 4) {
      setIsModalOpen(true);
      setValue(false);
    } else if (index !== 1) {
      sections[index]?.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (index !== 1) setDrawerOpen(false);
  };

  const handleCloseModal = () => setIsModalOpen(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDrawerInSmallScreens = (e) => {
    if (e.target.textContent !== "Services") {
      toggleDrawer(false);
    }
  };

  // Drawer Menu Items for smaller screens
  const drawerItems = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={(e) => closeDrawerInSmallScreens(e)}
      onKeyDown={(e) => closeDrawerInSmallScreens(e)}
    >
      <List>
        {["Home", "Services", "Cabs", "Tourism", "Contact"].map(
          (text, index) => (
            <React.Fragment key={text}>
              <ListItem disablePadding>
                {text === "Services" ? (
                  <>
                    <ListItemButton onClick={toggleDropdown}>
                      <ListItemText primary="Services" />
                      {dropdownOpen ? <AiOutlineUp /> : <AiOutlineDown />}
                    </ListItemButton>
                    <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
                      <List
                        component="div"
                        disablePadding
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          zIndex: 10,
                          width: "100%",
                          backgroundColor: "white",
                          boxShadow: 3,
                        }}
                      >
                        {[
                          "Intra City",
                          "Outstation",
                          "Rental",
                          "Corporate",
                        ].map((service, i) => (
                          <ListItemButton key={i} sx={{ pl: 4 }} disabled>
                            <ListItemText primary={service} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItemButton onClick={() => handleScroll(index)}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                )}
              </ListItem>
            </React.Fragment>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Logo />

          {/* Hamburger Icon for Small Screens */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <FaBars size={24} />
          </IconButton>

          {/* Tabs for Medium and Larger Screens */}
          {!isSmallScreen && (
            <Tabs
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                if (newValue !== 1) {
                  handleScroll(newValue); // Only scroll if it's not "Services"
                }
              }}
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                ml: "auto",
                "& .MuiTabs-indicator": {
                  height: 0,
                },
              }}
            >
              <Tab label="Home" />
              <Tab
                label="Services"
                onClick={(e) => {
                  toggleDropdown();
                  setAnchorEl(e.currentTarget);
                }}
              />
              <Tab label="Cabs" />
              <Tab label="Tourism" />
              <Tab label="Contact" />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Small Screens */}
      <Drawer anchor="right" open={drawerOpen} sx={{ display: { md: "none" } }}>
        {drawerItems}
      </Drawer>

      {/* Services Dropdown for Larger Screens (Displayed Below) */}
      {!isSmallScreen && dropdownOpen && anchorEl && (
        <Box
          sx={{
            position: "absolute",
            top: anchorEl.getBoundingClientRect().bottom, // Position below the "Services" tab
            left: anchorEl.getBoundingClientRect().left,
            backgroundColor: "white",
            boxShadow: 3,
            borderRadius: 1,
            width: "200px",
            zIndex: 1000,
          }}
        >
          <List>
            {["Intra City", "Outstation", "Rental", "Corporate"].map(
              (service, index) => (
                <MenuItem key={index} disabled>
                  {service}
                </MenuItem>
              )
            )}
          </List>
        </Box>
      )}

      {/* Contact Modal */}
      <ContactModal open={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default Header;
