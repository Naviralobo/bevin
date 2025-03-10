const cabsStyles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
    },
  },
  serviceDescription: {
    fontSize: "1rem",
    color: "#555",
    textDecoration: "none",
    color: "primary.main",
    cursor: "pointer",
    "&:hover": { textDecoration: "underline" },
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    cursor: "pointer",
    width: "30px",
    height: "30px",
    color: "#000",
  },
  prevArrow: {
    left: "10px",
  },
  nextArrow: {
    right: "10px",
  },
};

export default cabsStyles;
