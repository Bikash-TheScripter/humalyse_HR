import PropTypes from "prop-types";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";

const NavigationBar = ({
  navItems,
  activeSection,
  onNavClick,
  onActionClick,
  isScrolled,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        borderBottom: (theme) =>
          `1px solid ${isScrolled ? theme.palette.divider : "transparent"}`,
        transition: "all 240ms ease",
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.94)"
          : "rgba(255, 255, 255, 0.85)",
      }}
    >
      <Toolbar disableGutters sx={{ px: { xs: 2, md: 4 } }}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            component="img"
            src="/Logo highlighted.jpg"
            alt="Humalyse logo"
            sx={{
              width: { xs: 44, md: 52 },
              height: { xs: 44, md: 52 },
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(13,27,43,0.18)",
            }}
          />
          <Box>
            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
              Staffing Partner
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Humalyse HR
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" spacing={1.5} alignItems="center">
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                color={activeSection === item.id ? "primary" : "inherit"}
                variant={activeSection === item.id ? "contained" : "text"}
                onClick={() => onNavClick(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
          <Button variant="outlined" color="secondary" onClick={onActionClick}>
            Request Talent
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

NavigationBar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeSection: PropTypes.string.isRequired,
  onNavClick: PropTypes.func.isRequired,
  onActionClick: PropTypes.func.isRequired,
  isScrolled: PropTypes.bool,
};

NavigationBar.defaultProps = {
  isScrolled: false,
};

export default NavigationBar;
