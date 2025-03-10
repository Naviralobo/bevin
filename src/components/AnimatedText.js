import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

// Animated Text Component for Letter-by-Letter Animation
const AnimatedText = ({ text }) => {
  return (
    <Typography
      variant="body1"
      color="textSecondary"
      sx={{
        fontSize: { xs: "2rem", md: "4rem" },
        textAlign: "center",
        marginBottom: 2,
        lineHeight: "1.5",
        fontFamily: "'Satisfy', cursive",
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ delay: index * 0.1, duration: 1 }}
        >
          {char}
        </motion.span>
      ))}
    </Typography>
  );
};

export default AnimatedText;
