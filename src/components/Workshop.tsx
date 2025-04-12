import { useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ComputerIcon from "@mui/icons-material/Computer";
import { motion, useInView } from "framer-motion";

// const MotionBox = motion.create(Box);
const MotionGrid = motion.create(Grid);

const workshopFeatures = [
  "Teorijske osnove web developmenta",
  "Praktičan rad sa HTML i CSS",
  "Uvod u JavaScript i DOM manipulaciju",
  "Kreiranje responzivnih web stranica",
  "Hosting i publikovanje sajta",
  "Sertifikat o završenoj radionici",
];

const Workshop = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <Box
      id="workshop"
      component="section"
      sx={{
        py: 10,
        backgroundColor: "#f0f4f9",
      }}
      ref={ref}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={6} alignItems="center">
            <MotionGrid size={{ xs: 12, md: 6 }} variants={itemVariants}>
              <Box sx={{ mb: { xs: 4, md: 0 } }}>
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
                  PRAKTIČNA EDUKACIJA
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Radionica "Moj prvi sajt"
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }} paragraph>
                  Pridružite se našoj interaktivnoj radionici gde ćete napraviti
                  svoj prvi web sajt! Kroz praktičan rad steći ćete osnovna
                  znanja iz web developmenta i kreirati funkcionalnu web
                  stranicu koju ćete moći da pokažete svima.
                </Typography>

                <List sx={{ mb: 4 }}>
                  {workshopFeatures.map((feature, index) => (
                    <ListItem key={index} sx={{ p: 0, pb: 1 }}>
                      <ListItemIcon sx={{ minWidth: "36px" }}>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
                    Detalji radionice:
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 6 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Datum:
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        15. maj 2025.
                      </Typography>

                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Vreme:
                      </Typography>
                      <Typography variant="body2">09:00 - 15:00</Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Mesto:
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        Kabinet 2a - Tehnička skola
                      </Typography>

                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Predavači:
                      </Typography>
                      <Typography variant="body2">Prof. Ervin Kacar</Typography>
                      <Typography variant="body2">Prof. Amina Memic</Typography>
                      <Typography variant="body2">
                        Prof. Nerma Brnicanin
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </MotionGrid>

            <MotionGrid size={{ xs: 12, md: 6 }} variants={itemVariants}>
              <Card
                elevation={5}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                      p: 4,
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <ComputerIcon sx={{ fontSize: 50, mb: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      Prijavi se za radionicu
                    </Typography>
                    <Typography variant="body2">
                      Broj mesta je ograničen. Prijavi se na vreme!
                    </Typography>
                  </Box>

                  <Box sx={{ p: 4 }}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Ime i prezime"
                          variant="outlined"
                          size="medium"
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
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
                          label="Broj telefona"
                          variant="outlined"
                          size="medium"
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Škola/Razred"
                          variant="outlined"
                          size="medium"
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Button
                          fullWidth
                          variant="contained"
                          color="secondary"
                          size="large"
                          sx={{
                            py: 1.5,
                            borderRadius: 2,
                            fontSize: "1rem",
                          }}
                        >
                          Prijavi se
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </MotionGrid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Workshop;
