const titleStyles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
      padding: "100px 32px 32px 32px",
    },
    gridItem: {
      minHeight: "100%", // Ensure full height
      display: "flex", // Ensures content aligns correctly
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1, // ✅ Makes sure both sections take equal space
    },
    text: {
      textAlign: "center",
      marginTop: { xs: 2, md: 5 },
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      textAlign: "center",
    },
    backgroundImage: {
      width: "100%",
      maxWidth: "400px",
      borderRadius: "10px",
    },
    carGif: {
      position: "absolute",
      bottom: "30%",
      width: "80px",
      height: "auto",
    },
  };
  
  export default titleStyles;
  