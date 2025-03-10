import { Box, Typography } from "@mui/material";
import React from "react";
import commonStyles from "../../styles/homepage/common";
import bhel from "../../assets/images/customers/bhel.png";
import ac from "../../assets/images/customers/ac.png";
import adani from "../../assets/images/customers/adani.png";
import tps from "../../assets/images/customers/tps.png";
import mpgl from "../../assets/images/customers/mpgl.png";

const Customers = () => (
  <Box sx={commonStyles.container}>
    <Typography variant="h4" color="primary" sx={{ mb: 3 }}>
      Join Our Circle of Trust
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 4,
      }}
    >
      {[bhel, ac, adani, tps, mpgl].map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`customer-${index + 1}`}
          sx={{
            width: { xs: "60px", md: "80px" },
            height: { xs: "50px", md: "70px" },
          }}
        />
      ))}
    </Box>
  </Box>
);

export default Customers;
