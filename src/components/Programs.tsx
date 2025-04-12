import { useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import DevicesIcon from "@mui/icons-material/Devices";
import SettingsIcon from "@mui/icons-material/Settings";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import { motion, useInView } from "framer-motion";
import { DriveEtaRounded } from "@mui/icons-material";

const MotionGrid = motion.create(Grid);

const programs = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Elektrotehničar informacionih tehnologija",
    description:
      "Obrazovanje u oblasti programiranja, web developmenta, baza podataka i računarskih mreža.",
    duration: "4 godine",
    opportunities: [
      "Programer",
      "Web Developer",
      "IT Tehničar",
      "Administrator mreže",
    ],
    color: "#3f51b5",
  },
  {
    icon: <DevicesIcon fontSize="large" />,
    title: "Elektrotehničar računara",
    description:
      "Fokus na hardverskim komponentama računara, dijagnostici kvarova i sistemskom održavanju.",
    duration: "4 godine",
    opportunities: [
      "Servis računara",
      "Tehničar održavanja",
      "Hardware specialist",
    ],
    color: "#673ab7",
  },
  {
    icon: <ElectricalServicesIcon fontSize="large" />,
    title: "Elektrotehničar energetike",
    description:
      "Obrazovanje u oblasti elektrotehnike, elektroenergetskih sistema i obnovljivih izvora energije.",
    duration: "4 godine",
    opportunities: [
      "Elektrotehničar",
      "Tehničar održavanja",
      "Projektant elektroinstalacija",
    ],
    color: "#2196f3",
  },
  {
    icon: <SettingsIcon fontSize="large" />,
    title: "Mašinski tehničar",
    description:
      "Sticanje znanja iz oblasti mašinstva, CAD projektovanja i CNC tehnologija.",
    duration: "4 godine",
    opportunities: ["Mašinski tehničar", "CAD projektant", "CNC operater"],
    color: "#f44336",
  },
  {
    icon: <DriveEtaRounded fontSize="large" />,
    title: "Saobraćajni tehničar",
    description:
      "Obrazovanje u oblasti saobraćajnosti, mehatroničarstva i robotike.",
    duration: "4 godine",
    opportunities: ["Saobraćajni tehničar"],
    color: "#ff9800",
  },
];

const Programs = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box id="programs" component="section" sx={{ py: 10 }} ref={ref}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              letterSpacing: 1.5,
              mb: 2,
            }}
          >
            SMEROVI
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Obrazovni profili
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
            Škola "Izudin Sušević" pruža obrazovanje za različite tehničke
            profile koji su usklađeni sa potrebama savremenog tržišta rada i
            industrije.
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={4}>
            {programs.map((program, index) => (
              <MotionGrid
                size={{
                  xs: 12,
                  md: 6,
                  lg: 4,
                }}
                key={index}
                variants={itemVariants}
              >
                <Card
                  elevation={3}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative",
                    "&:hover": {
                      boxShadow: 8,
                      transform: "translateY(-5px)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: program.color,
                      color: "white",
                    }}
                  >
                    {program.icon}
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {program.title}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={program.duration}
                        size="small"
                        color="primary"
                        sx={{ borderRadius: 1 }}
                      />
                    </Box>
                    <Typography variant="body2" paragraph sx={{ mb: 3 }}>
                      {program.description}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 1, fontWeight: 600 }}
                    >
                      Mogućnosti zapošljavanja:
                    </Typography>
                    <Box>
                      {program.opportunities.map((item, i) => (
                        <Chip
                          key={i}
                          label={item}
                          size="small"
                          variant="outlined"
                          sx={{ mr: 1, mb: 1, borderRadius: 1 }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      size="medium"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 2 }}
                    >
                      Detaljnije
                    </Button>
                  </CardActions>
                </Card>
              </MotionGrid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Programs;
