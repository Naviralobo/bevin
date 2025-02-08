import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import movingCar from "../../assets/images/movingCar.gif";
import tuty from "../../assets/images/tuty.png";
import styles from "../../styles/homepage/title.js";
import { motion } from "framer-motion";

// const Title = React.forwardRef((props, ref) => {
//   return (
//     <Box
//       ref={ref}
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "#f5f5f5",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         p: 4,
//       }}
//     >
//       <Grid2 container spacing={4} alignItems="center">
//         {/* Left Section - Text */}
//         <Grid2 item size={{ xs: 12, md: 6 }}>
//           <Typography
//             variant="h4"
//             color="primary"
//             textAlign="center"
//             mt={{ xs: 2, md: 5 }}
//           >
//             Enjoy Seamless Travels Throughout Pearl city
//           </Typography>
//         </Grid2>

//         {/* Right Section - Image & GIF */}
//         <Grid2
//           item
//           size={{ xs: 12, md: 6 }}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Box
//             sx={{ position: "relative", width: "100%", textAlign: "center" }}
//           >
//             <img
//               src={tuty} // Change this to your image
//               alt="Scenic Road"
//               style={{
//                 width: "100%",
//                 // maxWidth: { sm: "400px", md: "400px" },
//                 maxWidth: "400px",
//                 borderRadius: "10px",
//               }}
//             />
//             <img
//               src={movingCar} // Change this to your GIF
//               alt="Car Animation"
//               style={{
//                 position: "absolute",
//                 bottom: "10%",
//                 left: "70%",
//                 transform: "translateX(-50%)",
//                 width: "200px",
//                 height: "auto",
//               }}
//             />
//           </Box>
//         </Grid2>
//       </Grid2>
//     </Box>
//   );
// });
const Title = React.forwardRef((props, ref) => {
  return (
    <Box ref={ref} sx={styles.container}>
      <Grid2
        container
        spacing={2}
        alignItems="center"
      >
        {/* Left Section - Text */}
        <Grid2 size={{ xs: 12, md: 6 }} sx={styles.gridItem}>
          <Typography variant="h4" color="primary" sx={styles.text}>
            <p> Enjoy Seamless Travels Through </p>
            <p> Tamil Nadu's Southern Corridor</p>
          </Typography>
        </Grid2>

        {/* Right Section - Image & GIF */}
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={styles.gridItem}
        >
          <Box sx={styles.imageContainer}>
            {/* Background Image */}
            <img src={tuty} alt="Scenic Road" style={styles.backgroundImage} />

            {/* Moving Car GIF (Framer Motion) */}
            <motion.img
              src={movingCar}
              alt="Car Animation"
              style={styles.carGif}
              animate={{ x: ["-600%", "-105%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
});

export default Title;
