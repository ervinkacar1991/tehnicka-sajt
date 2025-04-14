import { useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion, useInView } from "framer-motion";

const MotionGrid = motion.create(Grid);

const Contact = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const contactInfo = [
    {
      icon: (
        <LocationOnIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      title: "Adresa",
      details: "Vuka Karadžica, 36300 Novi Pazar",
    },
    {
      icon: (
        <PhoneIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      title: "Telefon",
      details: "+381 20 123 456",
    },
    {
      icon: (
        <EmailIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      title: "Email",
      details: "kontakt@tehnicka-skola.edu.rs",
    },
    {
      icon: (
        <AccessTimeIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      title: "Radno vreme",
      details: "Ponedeljak - Petak: 07:00 - 19:00",
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 10,
      }}
      ref={ref}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            component="div"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              letterSpacing: 1.5,
              mb: 2,
            }}
          >
            KONTAKTIRAJTE NAS
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Tu smo za sva pitanja
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              mb: 3,
              color: "text.secondary",
            }}
          >
            Pošaljite nam poruku ili nas posetite. Sa zadovoljstvom ćemo
            odgovoriti na sva vaša pitanja o školi, smerovima ili radionicama.
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={5}>
            <MotionGrid size={{ xs: 12, md: 6 }} variants={itemVariants}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 3, fontWeight: 600 }}
                >
                  Pošaljite poruku
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Ime i prezime"
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email adresa"
                      variant="outlined"
                      size="medium"
                      type="email"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Naslov"
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Vaša poruka"
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        fontSize: "1rem",
                      }}
                    >
                      Pošalji poruku
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </MotionGrid>

            <MotionGrid size={{ xs: 12, md: 6 }} variants={itemVariants}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 3, fontWeight: 600 }}
                >
                  Kontakt informacije
                </Typography>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                  {contactInfo.map((info, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box sx={{ display: "flex", mb: 1 }}>{info.icon}</Box>
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{ fontWeight: 600 }}
                      >
                        {info.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {info.details}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    Naša lokacija
                  </Typography>
                  <Box
                    sx={{
                      height: "250px",
                      width: "100%",
                      bgcolor: "#e0e0e0",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Ovde će biti prikazana mapa sa lokacijom škole
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </MotionGrid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
