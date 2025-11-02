import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import Reveal from "./Reveal.jsx";

const AboutSection = ({
  sectionRef,
  copy,
  highlights,
  spotlights,
  approachSteps,
}) => {
  return (
    <Stack
      ref={sectionRef}
      id="about"
      component="section"
      sx={{ py: { xs: 10, md: 12 }, backgroundColor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <Reveal>
              <Stack spacing={2.5}>
                <Box>
                  <Typography variant="overline" color="secondary">
                    {copy.subtitle}
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 2, mb: 3 }}>
                    {copy.title}
                  </Typography>
                  <Stack spacing={2}>
                    {copy.paragraphs.map((paragraph) => (
                      <Typography
                        key={paragraph}
                        variant="body1"
                        sx={{ color: "text.secondary" }}
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
                <Grid container spacing={2}>
                  {spotlights.map((item, index) => (
                    <Grid item xs={12} sm={6} key={item.title}>
                      <Reveal delay={index * 80} variant="fade-up">
                        <Paper
                          sx={{
                            borderRadius: 3,
                            p: 2.5,
                            height: "100%",
                            backgroundColor: "rgba(19,177,165,0.08)",
                            border: (theme) =>
                              `1px solid ${theme.palette.divider}`,
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 600 }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary", mt: 1 }}
                          >
                            {item.description}
                          </Typography>
                        </Paper>
                      </Reveal>
                    </Grid>
                  ))}
                </Grid>
                <Stack spacing={2.5}>
                  {highlights.map((highlight, index) => (
                    <Reveal
                      key={highlight}
                      delay={index * 70}
                      variant="fade-left"
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <CheckCircleOutline color="secondary" />
                        <Typography variant="body1">{highlight}</Typography>
                      </Stack>
                    </Reveal>
                  ))}
                </Stack>
              </Stack>
            </Reveal>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Reveal delay={160}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  boxShadow: (theme) =>
                    `0 20px 55px ${theme.palette.primary.main}20`,
                  backgroundColor: "background.paper",
                  maxWidth: { xs: 560, md: 640 },
                  width: "100%",
                  mx: "auto",
                }}
              >
                <Typography variant="subtitle2" color="secondary">
                  Our Approach
                </Typography>
                <Typography variant="h5" sx={{ mt: 2, mb: 3 }}>
                  Discover, engage, optimise
                </Typography>
                <Stack spacing={3} alignItems="center">
                  {approachSteps.map((step, index) => (
                    <Reveal
                      key={step.title}
                      delay={index * 110}
                      variant={index % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                      <Card
                        elevation={0}
                        sx={{
                          borderRadius: 4,
                          border: (theme) =>
                            `1px solid ${theme.palette.divider}`,
                          backgroundColor: "rgba(255,255,255,0.9)",
                          boxShadow: "0 24px 45px rgba(14,51,80,0.12)",
                          maxWidth: 480,
                          width: "100%",
                          px: 4,
                          py: 4.5,
                          transition:
                            "transform 220ms ease, box-shadow 220ms ease",
                          "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0 32px 60px rgba(19, 80, 120, 0.18)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 0 }}>
                          <Stack spacing={2} alignItems="center">
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: "50%",
                                background: "rgba(19,177,165,0.16)",
                                display: "grid",
                                placeItems: "center",
                                color: "primary.main",
                                fontWeight: 700,
                              }}
                            >
                              {index + 1}
                            </Box>
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 600, textAlign: "center" }}
                            >
                              {step.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "text.secondary",
                                textAlign: "center",
                              }}
                            >
                              {step.detail}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Reveal>
                  ))}
                </Stack>
              </Paper>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

AboutSection.propTypes = {
  sectionRef: PropTypes.shape({ current: PropTypes.any }),
  copy: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  spotlights: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  approachSteps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

AboutSection.defaultProps = {
  sectionRef: undefined,
};

export default AboutSection;
