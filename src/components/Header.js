import React from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import Logo from "./Logo";
import { useState } from "react";

const Header = ({ sections }) => {
  const [value, setValue] = useState(0);

  const handleScroll = (index) => {
    sections[index].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Logo />
        <Tabs
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            handleScroll(newValue);
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
          <Tab label="Services" />
          <Tab label="About Us" />
          <Tab label="Tourism" />
          <Tab label="Contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
