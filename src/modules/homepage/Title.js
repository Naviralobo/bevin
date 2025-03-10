import React, { useState, useEffect } from "react";
import { Box, Grid2, Typography } from "@mui/material";
import bus from "../../assets/images/bus.png";
import { motion } from "framer-motion";
import styles from "../../styles/homepage/title.js";
import AnimatedText from "../../components/AnimatedText.js";

const Title = React.forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const serviceContents = [
    {
      title: "Wide Selection of Cars",
      description: " Find the perfect vehicle for every journey.",
    },
    {
      title: "Unbeatable Pricing",
      description: "Enjoy the best rates in the industry.",
    },
    {
      title: "24/7 Customer Support",
      description:
        " We’re always here to assist you with any needs or concerns.",
    },
    {
      title: "Safety First",
      description: " We ensure you a secure and comfortable experience.",
    },
  ];

  // Change content every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceContents.length);
    }, 7000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <Grid2
      ref={ref}
      container
      alignItems="center"
      sx={styles.backgroundImage}
    >
      <Grid2 size={{ xs: 12, md: 6 }} sx={styles.gridItem}>
        <Box component="img" src={bus} alt="Scenic Road" sx={styles.busImage} />
      </Grid2>

      <Grid2 size={{ xs: 12, md: 6 }} sx={styles.gridItem}>
        <Box sx={{ ...styles.text, padding: 2 }}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.1, ease: "easeInOut", delay: 0.3 },
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0,
            }}
            style={{
              backgroundColor: serviceContents[currentIndex].backgroundColor,
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h5"
              color="primary"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                textAlign: "center",
                fontSize: { xs: "2rem", md: "2rem" },
              }}
            >
              <strong>{serviceContents[currentIndex].title}</strong>
            </Typography>

            <motion.div
              key={serviceContents[currentIndex].description}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{
                duration: 5,
                delay: 0.5,
              }}
            >
              <AnimatedText text={serviceContents[currentIndex].description} />
            </motion.div>
          </motion.div>
        </Box>
      </Grid2>
    </Grid2>
  );
});

export default Title;
