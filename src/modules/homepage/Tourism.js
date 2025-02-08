import React from "react";
import { Box, Typography } from "@mui/material";

const Tourism = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    sx={{
      p: 4,
      textAlign: "center",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
    }}
  >
    <Typography variant="h4" color="primary" mt={5}>
      Tourism
    </Typography>
  </Box>
));

export default Tourism;
