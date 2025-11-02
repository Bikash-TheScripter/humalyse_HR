import PropTypes from "prop-types";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
  ArrowForward,
  Email,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";

const ContactSection = ({
  sectionRef,
  copy,
  contactInfo,
  fields,
  formValues,
  onFieldChange,
  onSubmit,
  loading,
}) => {
  return (
    <Box
      ref={sectionRef}
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg, rgba(15,31,47,0.92) 0%, rgba(26,79,122,0.96) 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="stretch">
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={5}>
            <Stack
              spacing={3.5}
              sx={{
                height: "100%",
                justifyContent: "flex-start",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: "rgba(255,255,255,0.72)" }}
              >
                {copy.overline}
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: 600, lineHeight: 1.2 }}
              >
                {copy.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.78)" }}
              >
                {copy.subtitle}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.68)", maxWidth: 380 }}
              >
                {copy.helper}
              </Typography>

              <Stack spacing={2.5} sx={{ width: "100%", maxWidth: 340 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Phone />
                  <Typography variant="body1">
                    {contactInfo.phones.join(" / ")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Email />
                  <Typography variant="body1">{contactInfo.email}</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <LocationOn />
                  <Typography variant="body1">
                    {contactInfo.locations}
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <IconButton
                  component={Link}
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.32)",
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <Link
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: "rgba(255,255,255,0.78)",
                    fontWeight: 600,
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                    wordBreak: "break-all",
                  }}
                >
                  {contactInfo.linkedin}
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT CONTENT (FORM) */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                borderRadius: 4,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,247,251,0.96) 100%)",
                color: "text.primary",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 4, fontWeight: 600, textAlign: "center" }}
              >
                {copy.formTitle}
              </Typography>

              <Box
                component="form"
                noValidate
                onSubmit={onSubmit}
                sx={{ width: "100%" }}
              >
                <Grid container spacing={3}>
                  {/* Each field: two per row on md+, one per row on xs */}
                  {fields.map((field) => (
                    <Grid item xs={12} sm={6} key={field.name}>
                      <TextField
                        required={field.required}
                        fullWidth
                        label={field.label}
                        name={field.name}
                        type={field.type || "text"}
                        value={formValues[field.name]}
                        onChange={onFieldChange}
                        variant="outlined"
                        InputLabelProps={{
                          shrink: Boolean(formValues[field.name]),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                          "& .MuiOutlinedInput-input": {
                            py: 1.5,
                          },
                        }}
                      />
                    </Grid>
                  ))}

                  {/* Message field - full width */}
                  <Grid item xs={12}>
                    <TextField
                      label="Query / Message"
                      name="message"
                      value={formValues.message}
                      onChange={onFieldChange}
                      multiline
                      rows={5}
                      fullWidth
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                        "& .MuiOutlinedInput-input": {
                          py: 1.5,
                        },
                      }}
                    />
                  </Grid>

                  {/* Submit Button - centered and properly aligned */}
                  <Grid item xs={12}>
                    <Stack alignItems="center" spacing={2}>
                      <LoadingButton
                        type="submit"
                        variant="contained"
                        size="large"
                        loading={loading}
                        loadingPosition="end"
                        endIcon={<ArrowForward />}
                        sx={{
                          minWidth: 220,
                          borderRadius: 10,
                          py: 1.5,
                          fontSize: "1rem",
                        }}
                      >
                        {copy.buttonLabel}
                      </LoadingButton>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          textAlign: "center",
                          maxWidth: "80%",
                        }}
                      >
                        By submitting, you agree to be contacted by Humalyse HR
                        for relevant opportunities and updates.
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionRef: PropTypes.shape({ current: PropTypes.any }),
  copy: PropTypes.shape({
    overline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    helper: PropTypes.string.isRequired,
    formTitle: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
  }).isRequired,
  contactInfo: PropTypes.shape({
    phones: PropTypes.arrayOf(PropTypes.string).isRequired,
    email: PropTypes.string.isRequired,
    locations: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      required: PropTypes.bool,
      type: PropTypes.string,
    })
  ).isRequired,
  formValues: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

ContactSection.defaultProps = {
  sectionRef: undefined,
  loading: false,
};

export default ContactSection;
