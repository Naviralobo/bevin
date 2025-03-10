import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../assets/images/logo.png";
import commonStyles from "../styles/homepage/common";

const StyledLogo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  cursor: "pointer",
  fontSize: "2rem",
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
}));

const Logo = ({ footer }) => {
  const logoClickHandler = () => {
    if (footer) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 0,
        m: 0,
      }}
      onClick={logoClickHandler}
    >
      <img src={logo} alt={logo} style={commonStyles.logo} />
      <StyledLogo>Bevin</StyledLogo>
    </Box>
  );
};

export default Logo;
