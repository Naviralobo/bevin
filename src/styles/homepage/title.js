import { keyframes, minHeight } from "@mui/system";
import tuty from "../../assets/images/tuty.png";

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const titleStyles = {
  gridItem: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  text: {
    textAlign: "center",
    marginTop: { xs: 2, md: 5 },
    padding: 2,
  },
  tuty: {
    width: "800px",
    objectFit: "contain",
  },
  imageContainer: {
    width: "100%",
    textAlign: "center",
  },
  busImage: {
    width: "100%",
    maxWidth: "1000px",
    borderRadius: "10px",
    marginTop: "80px",
  },
  carGif: {
    position: "absolute",
    bottom: "30%",
    width: "80px",
    height: "auto",
  },
  backgroundImage: {
    position: "relative",
    minHeight: { md: "100vh" },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 50,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${tuty})`,
      backgroundSize: "60%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "lightblue",
      opacity: 0.2,
      zIndex: -1,
    },
  },
  fadeInEffect: {
    animation: `${fadeIn} 1s ease-in-out`,
  },
  fadeOutEffect: {
    animation: `${fadeOut} 1s ease-in-out`,
  },
  typingEffect: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "inline-block",
    animation: `${typing} 3s steps(50, end) forwards`,
    borderRight: "2px solid transparent", 
  },
  titleText: {
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
    fontSize: "1.6rem",
    animation: `${fadeIn} 1s ease-in-out`,
  },
  descriptionText: {
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: 2,
    lineHeight: "1.5",
    animation: `${typing} 3s steps(50, end) forwards`,
  },
};

export default titleStyles;
