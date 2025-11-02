import PropTypes from "prop-types";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowForward, CheckCircleOutline } from "@mui/icons-material";
import Reveal from "./Reveal.jsx";

const HeroSection = ({
  sectionRef,
  copy,
  coreValues,
  features,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <Box ref={sectionRef} id="home" sx={{ position: "relative" }}>
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #0f1f2f 0%, #1a4f7a 45%, #13b1a5 100%)",
          color: "#fff",
          pt: { xs: 14, md: 18 },
          pb: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Reveal variant="fade-left">
                <Stack spacing={3}>
                  <Chip
                    label={copy.badge}
                    sx={{
                      alignSelf: "flex-start",
                      bgcolor: "rgba(19, 177, 165, 0.18)",
                      color: "#fff",
                      borderRadius: 999,
                      px: 2,
                      fontWeight: 600,
                      letterSpacing: 0.3,
                    }}
                  />
                  <Typography variant="h2" component="h1">
                    {copy.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(255,255,255,0.84)", maxWidth: 620 }}
                  >
                    {copy.subtitle}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(255,255,255,0.78)", maxWidth: 520 }}
                  >
                    {copy.tagline}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.68)", maxWidth: 520 }}
                  >
                    {copy.support}
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      endIcon={<ArrowForward />}
                      onClick={onPrimaryClick}
                    >
                      {copy.primaryCta}
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      size="large"
                      onClick={onSecondaryClick}
                    >
                      {copy.secondaryCta}
                    </Button>
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 3, sm: 6 }}
                    sx={{ mt: 2 }}
                  >
                    {coreValues.map((item) => (
                      <Box key={item.title} sx={{ maxWidth: 240 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600, color: "#fff" }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            opacity: 0.72,
                            color: "rgba(255,255,255,0.78)",
                            mt: 0.5,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Reveal>
            </Grid>
            <Grid item xs={12} md={5}>
              <Reveal delay={160} variant="fade-right">
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    position: "relative",
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    boxShadow: "0 30px 70px rgba(9, 25, 43, 0.35)",
                    color: "rgba(15,31,47,0.9)",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 4,
                      pointerEvents: "none",
                      background:
                        "linear-gradient(135deg, rgba(19,177,165,0.12) 0%, rgba(26,79,122,0.12) 100%)",
                    }}
                  />
                  <Stack spacing={2.5} sx={{ position: "relative" }}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Why leaders choose us
                    </Typography>
                    {features.map((point) => (
                      <Stack direction="row" spacing={2} key={point}>
                        <CheckCircleOutline color="secondary" />
                        <Typography
                          variant="body1"
                          sx={{ color: "text.primary" }}
                        >
                          {point}
                        </Typography>
                      </Stack>
                    ))}
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background:
                          "linear-gradient(120deg, rgba(26,79,122,0.08) 0%, rgba(19,177,165,0.12) 100%)",
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "primary.main" }}
                      >
                        Featured Collaboration
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mt: 1 }}
                      >
                        Building a tech-driven foundation for scalable growth
                        and lasting impact, empowering organizations with
                        innovative solutions, seamless experiences, and a
                        future-ready approach to digital transformation.
                      </Typography>
                    </Paper>
                  </Stack>
                </Paper>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

HeroSection.propTypes = {
  sectionRef: PropTypes.shape({ current: PropTypes.any }),
  copy: PropTypes.shape({
    badge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    support: PropTypes.string.isRequired,
    primaryCta: PropTypes.string.isRequired,
    secondaryCta: PropTypes.string.isRequired,
  }).isRequired,
  coreValues: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPrimaryClick: PropTypes.func.isRequired,
  onSecondaryClick: PropTypes.func.isRequired,
};

HeroSection.defaultProps = {
  sectionRef: undefined,
};

export default HeroSection;
