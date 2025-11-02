import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowForward,
  CorporateFare,
  Handshake,
  Insights,
} from "@mui/icons-material";
import { CheckCircleOutline } from "@mui/icons-material";
import Reveal from "./Reveal.jsx";

const iconMap = {
  leadership: CorporateFare,
  project: Handshake,
  advisory: Insights,
};

const ServicesSection = ({ sectionRef, services, onCtaClick }) => {
  const variants = ["fade-left", "fade-up", "fade-right"];
  return (
    <Box
      ref={sectionRef}
      id="services"
      component="section"
      sx={{
        py: { xs: 10, md: 12 },
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(245,247,250,1) 0%, rgba(232,241,247,1) 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(19,177,165,0.12) 0, transparent 45%), radial-gradient(circle at 80% 0%, rgba(26,79,122,0.15) 0, transparent 40%)",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Reveal>
          <Stack spacing={3} sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="overline" color="secondary">
              Staffing Solutions
            </Typography>
            <Typography variant="h3">
              Solutions engineered for impact
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 780, mx: "auto" }}
            >
              From critical niche hires to scalable deployment of blue and grey
              collar teams, we co-build bespoke models that match your operating
              rhythm and organisational culture.
            </Typography>
          </Stack>
        </Reveal>

        <Grid container spacing={{ xs: 4, md: 5 }} justifyContent="center">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || CorporateFare;
            return (
              <Grid item xs={12} md={4} key={service.id}>
                <Reveal
                  delay={index * 120}
                  variant={variants[index % variants.length]}
                >
                  <Paper
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      backgroundColor: "rgba(255,255,255,0.9)",
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                      boxShadow: "0 24px 45px rgba(14,51,80,0.12)",
                      transition: "transform 220ms ease, box-shadow 220ms ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 32px 60px rgba(19, 80, 120, 0.18)",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                          bgcolor: "rgba(19,177,165,0.16)",
                          color: "primary.main",
                          width: 48,
                          height: 48,
                        }}
                      >
                        <IconComponent />
                      </Avatar>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {service.title}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {service.description}
                    </Typography>

                    <Stack spacing={1.5}>
                      {service.points.map((point) => (
                        <Stack
                          direction="row"
                          spacing={2}
                          key={point}
                          alignItems="flex-start"
                        >
                          <CheckCircleOutline
                            color="secondary"
                            sx={{ mt: 0.4 }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: "text.primary" }}
                          >
                            {point}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button
                      variant="text"
                      color="primary"
                      endIcon={<ArrowForward />}
                      onClick={onCtaClick}
                      sx={{
                        alignSelf: "flex-start",
                        mt: "auto",
                        fontWeight: 600,
                      }}
                    >
                      {service.ctaLabel || "Explore solutions"}
                    </Button>
                  </Paper>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

ServicesSection.propTypes = {
  sectionRef: PropTypes.shape({ current: PropTypes.any }),
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
      icon: PropTypes.string,
      ctaLabel: PropTypes.string,
    })
  ).isRequired,
  onCtaClick: PropTypes.func.isRequired,
};

ServicesSection.defaultProps = {
  sectionRef: undefined,
};

export default ServicesSection;
