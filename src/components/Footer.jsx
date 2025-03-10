import React from "react";
import { Box, Typography, IconButton, Grid2 } from "@mui/material";
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

const Footer = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    component="footer"
    sx={{
      bgcolor: "primary.main",
      color: "white",
      py: 4,
      px: { xs: 2, sm: 4 },
    }}
  >
    <Grid2
      container
      spacing={4}
      justifyContent="space-between"
      alignItems="center"
    >
      {/* Logo Section */}
      <Grid2 item xs={12} sm={6} textAlign={{ xs: "center" }}>
        <Logo footer={true} />
        <Typography>Since 1961</Typography>
      </Grid2>

      {/* Contact Section */}
      <Grid2 item xs={12} sm={6} textAlign="center">
        <Box>
          <IconButton color="inherit" component="a" href="tel:+916380458832">
            <FaPhone />
            <Typography marginX={1}>916380458832</Typography>
          </IconButton>
        </Box>
        <IconButton
          color="inherit"
          component="a"
          href="mailto:bevintransports@gmail.com"
        >
          <FaEnvelope />
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href="https://wa.me/message/D6NH2XB7AKKHM1"
          target="_blank"
        >
          <FaWhatsapp />
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href="https://www.instagram.com/bevin_transports_1961"
          target="_blank"
        >
          <FaInstagram />
        </IconButton>
      </Grid2>
    </Grid2>
  </Box>
));

export default Footer;
