import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";
import { HashLink } from "react-router-hash-link";

function HideOnScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => setScrolled(window.scrollY > 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: "Početna", href: "#home" },
    { label: "O školi", href: "#about" },
    { label: "Smerovi", href: "#programs" },
    { label: "Radionica", href: "#workshop" },
    { label: "Kontakt", href: "#contact" },
  ];

  const smoothScrollTo = (id: string) => {
    setDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const schoolName = isMobile
    ? 'TŠ "IZUDIN SUŠEVIĆ"'
    : 'TEHNIČKA ŠKOLA "IZUDIN ŠUŠEVIĆ"';

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "transparent",
          boxShadow: scrolled ? 1 : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", padding: "8px 0" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SchoolIcon
                sx={{
                  display: { xs: "flex" },
                  mr: 1,
                  color: scrolled ? "primary.main" : "white",
                  fontSize: "2rem",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: scrolled ? "primary.main" : "white",
                  textDecoration: "none",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                {schoolName}
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  sx={{
                    mx: 1,
                    color: scrolled ? "text.primary" : "white",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  component={HashLink}
                  smooth
                  to={item.href}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: scrolled ? "text.primary" : "white",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        {/* Mobile drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              width: 250,
              backgroundColor: "#fafafa",
              borderLeft: "1px solid #ccc",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              p: 1,
              borderBottom: "1px solid #ccc",
            }}
          >
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ p: 1 }}>
            {menuItems.map((item) => (
              <ListItem
                key={item.label}
                component="button"
                onClick={() => smoothScrollTo(item.href.substring(1))}
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  my: 1,
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
