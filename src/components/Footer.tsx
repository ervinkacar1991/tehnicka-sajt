import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: "white",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <SchoolIcon sx={{ fontSize: 40, mr: 1 }} />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  letterSpacing: ".05rem",
                }}
              >
                SŠ "IZUDIN SUŠEVIĆ"
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Tehnička škola sa dugom tradicijom obrazovanja budućih stručnjaka
              u oblasti inženjerstva, informacionih tehnologija i drugih
              tehničkih disciplina.
            </Typography>
            <Box sx={{ mb: 3 }}>
              <IconButton color="inherit" aria-label="Facebook" size="large">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram" size="large">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="YouTube" size="large">
                <YouTubeIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn" size="large">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Navigacija
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {["Početna", "O školi", "Smerovi", "Radionica", "Kontakt"].map(
                (text) => (
                  <Box component="li" key={text} sx={{ mb: 1 }}>
                    <Link
                      href={`#${text.toLowerCase().replace(" ", "-")}`}
                      underline="hover"
                      color="inherit"
                      sx={{ fontWeight: 300 }}
                    >
                      {text}
                    </Link>
                  </Box>
                )
              )}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Obrazovni profil
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {[
                "Elektrotehničar IT",
                "Elektrotehničar računara",
                "Elektrotehničar energetike",
                "Mašinski tehničar",
                "Saobraćaj",
              ].map((text) => (
                <Box component="li" key={text} sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{ fontWeight: 300 }}
                  >
                    {text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Kontakt
            </Typography>
            <Typography variant="body2" paragraph sx={{ mb: 1 }}>
             Vuka Karadžica 10, 36300 Novi Pazar
            </Typography>
            <Typography variant="body2" paragraph sx={{ mb: 1 }}>
              Telefon: +381 20 123 456
            </Typography>
            <Typography variant="body2" paragraph sx={{ mb: 1 }}>
              Email: kontakt@tehnicka-skola.edu.rs
            </Typography>
            <Typography variant="body2" paragraph>
              Radno vreme: Pon - Pet: 07:00 - 19:00
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            © {currentYear} Tehnička škola "Izudin Sušević" - Sva prava zadržana
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
