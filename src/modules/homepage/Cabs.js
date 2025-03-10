import React from "react";

import sedan from "../../assets/images/cabs/sedan.jpeg";
import traveller from "../../assets/images/cabs/traveller.jpeg";
import bus from "../../assets/images/cabs/bus.jpeg";
import muv from "../../assets/images/cabs/muv.jpeg";
import suv from "../../assets/images/cabs/suv.jpeg";
import premMuv from "../../assets/images/cabs/premMuv.jpeg";

import HomePageGrid from "../../components/HomePageGrid.js";

// Service data
const services = [
  {
    img: sedan,
    title: "4 seater Sedan",
    desc: "Your description goes here",
  },
  {
    img: suv,
    title: "6 seater SUV",
    desc: "Your description goes here",
  },
  {
    img: muv,
    title: "7 seater MUV",
    desc: "Your description goes here",
  },
  {
    img: premMuv,
    title: "7 seater Premium MUV",
    desc: "Your description goes here",
  },
  {
    img: traveller,
    title: "14 seater Traveller",
    desc: "Your description goes here",
  },
  {
    img: bus,
    title: "Tourist Bus",
    desc: "Your description goes here",
  },
];

const Cabs = React.forwardRef((props, ref) => (
  <HomePageGrid services={services} propRef={ref} title="Cabs" />
));

export default Cabs;
