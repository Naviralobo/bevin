import React, { useRef } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../styles/theme";
import Header from "../components/Header";
import Services from "../modules/homepage/Services";
import About from "../modules/homepage/About";
import Contact from "../modules/homepage/Contact";
import Tourism from "../modules/homepage/Tourism";
import Title from "../modules/homepage/Title";

const HomePage = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const tourismRef = useRef(null);

  const sections = [homeRef, servicesRef, aboutRef, tourismRef, contactRef];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header sections={sections} />
      <Title ref={homeRef} />
      <Services ref={servicesRef} />
      <About ref={aboutRef} />
      <Tourism ref={tourismRef} />
      <Contact ref={contactRef} />
    </ThemeProvider>
  );
};

export default HomePage;
