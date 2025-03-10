import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Link,
  Grid,
  Fade,
} from "@mui/material";
// import { Close as CloseIcon } from "@mui/icons-material";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineClose,
} from "react-icons/ai"; // Using react-icons for more accurate icons

const ContactModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#f0f0f0", 
            p: 4,
            borderRadius: 3,
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)", 
            width: { xs: "90%", sm: "400px" },
            textAlign: "center",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#333",
            }}
          >
            <AiOutlineClose size={24} /> 
          </IconButton>

          <Typography variant="h5" mb={2} color="primary">
            Contact Us
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {/* Phone Number */}
            <Grid item xs={12}>
              <IconButton
                component={Link}
                href="tel:+916380458832"
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: "50%",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                <AiOutlinePhone color="#0D47A1" size={36} />
              </IconButton>
              <Link
                href="tel:+919876543210"
                underline="hover"
                sx={{ mx: 2, color: "#333" }}
              >
                +91 98765 43210
              </Link>
            </Grid>

            {/* Email ID */}
            <Grid item xs={4}>
              <IconButton
                component={Link}
                href="mailto:bevintransports@gmail.com"
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: "50%",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                <AiOutlineMail color="#D44638" size={36} />{" "}
              </IconButton>
            </Grid>

            {/* WhatsApp Link */}
            <Grid item xs={4}>
              <IconButton
                component={Link}
                href="https://wa.me/message/D6NH2XB7AKKHM1"
                target="_blank"
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: "50%",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                <AiOutlineWhatsApp color="#25D366" size={36} />{" "}
              </IconButton>
            </Grid>

            {/* Instagram Link */}
            <Grid item xs={4}>
              <IconButton
                component={Link}
                href="https://www.instagram.com/bevin_transports_1961"
                target="_blank"
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: "50%",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                <AiOutlineInstagram color="#E4405F" size={36} />{" "}
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ContactModal;
