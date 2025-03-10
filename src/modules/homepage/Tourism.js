import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import vallanaduSanctuary from "../../assets/images/tourism/VallanaduSanctuary.png";
import kalugumalai from "../../assets/images/tourism/kalugumalai.png";
import kattabommanFort from "../../assets/images/tourism/kattabommanFort.png";
import korkai from "../../assets/images/tourism/korkai.png";
import manapad from "../../assets/images/tourism/manapad.png";
import mayuraThottam from "../../assets/images/tourism/mayuraThottam.png";
import muthunagarBeach from "../../assets/images/tourism/muthunagarBeach.png";
import snowShrine from "../../assets/images/tourism/snowShrine.png";

import cabsStyles from "../../styles/homepage/cabs.js";
import commonStyles from "../../styles/homepage/common.js";

// Service data
const services = [
  {
    img: vallanaduSanctuary,
    title: "Vallanadu Sanctuary",
    link: "https://www.tamilnadutourism.tn.gov.in/destinations/vallanadu-wildlife-sanctuary",
  },
  {
    img: mayuraThottam,
    title: "Mayura Thottam",
    link: "https://www.tamilnadutourism.tn.gov.in/destinations/mayura-thottam",
  },
  {
    img: muthunagarBeach,
    title: "Muthu Nagar Beach",
    link: "https://www.tamilnadutourism.tn.gov.in/destinations/muthu-nagar-beach",
  },
  {
    img: snowShrine,
    title: "Our Lady of Snows Shrine Basilica",
    link: "https://www.tamilnadutourism.tn.gov.in/destinations/our-lady-of-snows-shrine-basilica",
  },
  {
    img: manapad,
    link: "https://www.tamilnadutourism.tn.gov.in/destinations/the-holy-cross-church-manapad",
    title: "The Holy Cross Church, Manapad",
  },
  {
    img: korkai,
    title: "Korkai, Thoothukudi",
    link: "https://www.tamilnadutourism.tn.gov.in/destinations/korkai-thoothukudi",
  },
  {
    img: kalugumalai,
    title: "Kalugumalai",
    link: "https://www.tamilnadutourism.tn.gov.in/destinations/kalugumalai",
  },
  {
    img: kattabommanFort,
    title: "Kattabomman Memorial Fort, Panchalankurichi",
    link: "https://www.tamilnadutourism.tn.gov.in/destinations/kattabomman-memorial-fort-panchalankurichi",
  },
];

const Tourism = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={commonStyles.container}>
    <Typography variant="h4" color="primary" sx={{ mb: 3 }}>
      Tourism
    </Typography>

    {/* Swiper Carousel */}
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={{
        prevEl: ".custom-swiper-prev",
        nextEl: ".custom-swiper-next",
      }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        600: { slidesPerView: 2 },
        900: { slidesPerView: 4 },
      }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      className="swiper-container"
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <Box
            onClick={() =>
              window.open(service.link, "_blank", "noopener,noreferrer")
            }
            sx={cabsStyles.card}
          >
            <img
              src={service.img}
              alt={service.title}
              style={commonStyles.serviceImage}
            />
            <Typography variant="h6" sx={commonStyles.subHeading}>
              {service.title}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
));

export default Tourism;
