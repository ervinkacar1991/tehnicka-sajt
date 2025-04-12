import { useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { motion, useInView } from "framer-motion";

const MotionGrid = motion.create(Grid);
const MotionCard = motion.create(Card);

const features = [
  {
    icon: <SchoolIcon fontSize="large" />,
    title: "Moderno obrazovanje",
    description:
      "Savremeni pristup nastavi sa fokusom na praktične veštine i najnovije tehnologije.",
  },
  {
    icon: <HistoryEduIcon fontSize="large" />,
    title: "Bogata tradicija",
    description:
      "Više od 50 godina iskustva u obrazovanju mladih stručnjaka i tehničkih kadrova.",
  },
  {
    icon: <GroupsIcon fontSize="large" />,
    title: "Stručni kadar",
    description:
      "Nastavno osoblje sa bogatim praktičnim iskustvom iz realnog sektora.",
  },
  {
    icon: <AutoStoriesIcon fontSize="large" />,
    title: "Savremeni laboratoriji",
    description:
      "Potpuno opremljeni kabineti za praktičnu nastavu i sticanje realnih veština.",
  },
];

const About = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 10,
        backgroundColor: "#f8f9fa",
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
            SAZNAJTE VIŠE
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            O našoj školi
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
            Tehnička škola "Izudin Sušević" je obrazovna institucija sa dugom
            tradicijom usmerenom na stručno obrazovanje u oblasti inženjerstva,
            IT-a i drugih tehničkih disciplina.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/images/school-building.jpg"
              alt="Zgrada škole"
              sx={{
                width: "100%",
                height: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: theme.palette.primary.main,
                }}
              >
                Upoznajte našu školu
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }} paragraph>
                Tehnička škola "Izudin Sušević" osnovana je sa ciljem da pruži
                kvalitetno obrazovanje u oblasti tehničkih nauka i da pripremi
                učenike za uspešnu karijeru ili nastavak obrazovanja.
              </Typography>
              <Typography variant="body1" paragraph>
                Kroz kombinaciju teorijske nastave i praktičnog rada, naši
                učenici stiču znanja i veštine koje su tražene na tržištu rada.
                Fokus nam je na razvoju kritičkog razmišljanja, rešavanju
                problema i timskom radu - kompetencija neophodnih za uspeh u
                savremenom svetu.
              </Typography>
              <Typography variant="body1" paragraph>
                Naši laboratoriji su opremljeni savremenom opremom, a nastavni
                kadar čine stručnjaci sa značajnim iskustvom u svojim oblastima,
                čime osiguravamo da obrazovanje bude relevantno i u skladu sa
                trendovima u industriji.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              textAlign: "center",
              mb: 5,
              fontWeight: 600,
            }}
          >
            Zašto izabrati našu školu?
          </Typography>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <MotionGrid
                  size={{ xs: 12, md: 3, sm: 6 }}
                  key={index}
                  variants={itemVariants}
                >
                  <MotionCard
                    elevation={2}
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      "&:hover": {
                        boxShadow: 8,
                        transform: "translateY(-5px)",
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <Avatar
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          width: 70,
                          height: 70,
                          mb: 2,
                          mx: "auto",
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{ mb: 1, fontWeight: 600 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </MotionCard>
                </MotionGrid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
