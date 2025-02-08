import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledLogo = styled(Typography)({
  fontWeight: 700,
  fontSize: "1.5rem",
  cursor: "pointer",
});

const Logo = () => {
  return <StyledLogo variant="h6">Bevin</StyledLogo>;
};

export default Logo;
