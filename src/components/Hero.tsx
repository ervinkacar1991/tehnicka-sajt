import { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HashLink } from "react-router-hash-link";
import { motion, useInView, useAnimation } from "framer-motion";
import bgImage from "../assets/images/photo-1517245386807-bb43f82c33c4.avif";
import bgImage2 from "../assets/images/premium_photo-1682145181120-73cfdfc8a36d.avif";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${bgImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        pt: 8,
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <MotionTypography
                variant="overline"
                sx={{
                  letterSpacing: 4,
                  mb: 2,
                  fontSize: "1rem",
                  color: theme.palette.secondary.light,
                }}
              >
                DOBRODOŠLI U
              </MotionTypography>

              <MotionTypography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.2,
                    },
                  },
                }}
              >
                Tehničku školu{" "}
                <span className="text-gradient">"Izudin Sušević"</span>
              </MotionTypography>

              <MotionTypography
                variant="h5"
                sx={{ mb: 4, fontWeight: 400 }}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.4,
                    },
                  },
                }}
              >
                Mesto gde znanje i praksa postaju budućnost
              </MotionTypography>

              <MotionBox
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={2}
                initial={{ opacity: 0, y: 60 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.6,
                    },
                  },
                }}
              >
                <Button
                  variant="contained"
                  component={HashLink}
                  smooth
                  to="#workshop"
                  size="large"
                  color="secondary"
                  sx={{
                    px: 4,
                    borderRadius: 2,
                    fontSize: "1rem",
                  }}
                >
                  Pridruži se radionici
                </Button>
                <Button
                  variant="outlined"
                  component={HashLink}
                  smooth
                  to="#programs"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    borderRadius: 2,
                    fontSize: "1rem",
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: theme.palette.primary.light,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Istraži smerove
                </Button>
              </MotionBox>
            </MotionBox>
          </Grid>

          {!isMobile && (
            <Grid size={{ md: 5 }}>
              <MotionBox
                sx={{
                  position: "relative",
                  height: "500px",
                  width: "100%",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
                initial={{ opacity: 0, x: 100 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.4,
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={bgImage}
                  alt="Studenti u učionici"
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                />
              </MotionBox>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
