import React, { useRef } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../styles/theme";
import Header from "../components/Header";
import Tourism from "../modules/homepage/Tourism";
import Title from "../modules/homepage/Title";
import Cabs from "../modules/homepage/Cabs";
import Customers from "../modules/homepage/Customers";
import Footer from "../components/Footer";

const HomePage = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const cabsRef = useRef(null);
  const contactRef = useRef(null);
  const tourismRef = useRef(null);

  const sections = [homeRef, servicesRef, cabsRef, tourismRef, contactRef];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header sections={sections} />
      <Title ref={homeRef} />
      <Cabs ref={cabsRef} />
      <Tourism ref={tourismRef} />
      <Customers />
      <Footer />
    </ThemeProvider>
  );
};

export default HomePage;
