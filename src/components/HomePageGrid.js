import React, { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // React Icons for prev and next arrows

import commonStyles from "../styles/homepage/common.js";
import styles from "../styles/homepage/homePageGrid.js";

const HomePageGrid = ({ propRef, services, title }) => {
  const swiperRef = useRef(null); // Ref for Swiper component

  // Handle custom prev and next button clicks
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <Box ref={propRef} sx={commonStyles.container}>
      <Typography variant="h4" color="primary" sx={{ mb: 3 }}>
        {title}
      </Typography>

      {/* Swiper Carousel */}
      <Box sx={{ position: "relative" }}>
        {/* Custom Prev Arrow */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            borderRadius: "50%",
            padding: "10px",
            zIndex: 2,
          }}
        >
          <MdChevronLeft size={30} />
        </IconButton>

        {/* Custom Next Arrow */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            borderRadius: "50%",
            padding: "10px",
            zIndex: 2,
          }}
        >
          <MdChevronRight size={30} />
        </IconButton>

        {/* Swiper component */}
        <Swiper
          ref={swiperRef} // Attach the ref to Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
          className="swiper-container"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Box sx={{...styles.gridItem}}>
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
    </Box>
  );
};

export default HomePageGrid;
