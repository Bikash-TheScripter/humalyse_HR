import PropTypes from "prop-types";
import { Box, Container, Link, Stack, Typography } from "@mui/material";

const Footer = ({ website, phones }) => {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "#0f1f2f",
        color: "rgba(255,255,255,0.72)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 0 }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Humalyse HR. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              href={website}
              color="inherit"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              {website.replace(/^https?:\/\//, "")}
            </Link>
            {phones.map((phone) => (
              <Link
                key={phone}
                href={`tel:${phone}`}
                color="inherit"
                underline="hover"
              >
                {phone}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

Footer.propTypes = {
  website: PropTypes.string.isRequired,
  phones: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Footer;
