import { useEffect, useRef, useState } from "react";
import { Alert, Box, Snackbar, Toolbar } from "@mui/material";
import emailjs from "@emailjs/browser";

import NavigationBar from "./components/NavigationBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

import {
  NAV_ITEMS,
  HERO_CONTENT,
  CORE_VALUES,
  HERO_FEATURES,
  ABOUT_COPY,
  ABOUT_HIGHLIGHTS,
  APPROACH_STEPS,
  ABOUT_SPOTLIGHTS,
  SERVICE_OFFERINGS,
  CONTACT_FIELDS,
  CONTACT_INFO,
  CONTACT_COPY,
} from "./content.js";

const EMAILJS_SERVICE_ID = "service_x5vevo5";
const EMAILJS_TEMPLATE_ID = "template_r3gdu5h";
const EMAILJS_PUBLIC_KEY = "xejpxpzjErb4TlQtQ";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    contact: contactRef,
  };

  const visibilityMap = useRef({
    home: 0,
    about: 0,
    services: 0,
    contact: 0,
  });

  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const thresholds = Array.from({ length: 21 }, (_, index) => index / 20);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.current[entry.target.id] = entry.intersectionRatio;
        });

        const [mostVisibleId, ratio] = Object.entries(
          visibilityMap.current
        ).reduce(
          (prev, curr) => (curr[1] > prev[1] ? curr : prev),
          ["home", 0]
        );

        if (ratio >= 0.15 && mostVisibleId !== activeSection) {
          setActiveSection(mostVisibleId);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: thresholds,
      }
    );

    const refs = [homeRef, aboutRef, servicesRef, contactRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const target = sectionRefs[id]?.current;
    if (target) {
      const offset = 88;
      const y = target.offsetTop - offset;
      window.scrollTo({ top: y >= 0 ? y : 0, behavior: "smooth" });
    }
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSnackbar({
        open: true,
        message:
          "Email service is not configured. Please add EmailJS template and public key.",
        severity: "error",
      });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          ...formValues,
          to_email: CONTACT_INFO.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormValues({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        message: "",
      });

      setSnackbar({
        open: true,
        message: "Thank you! Our consultants will get in touch shortly.",
        severity: "success",
      });
    } catch (error) {
      console.error("EmailJS error", error);
      setSnackbar({
        open: true,
        message: "We could not send your message. Please try again or call us.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = (_, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box>
      <NavigationBar
        navItems={NAV_ITEMS}
        activeSection={activeSection}
        onNavClick={scrollToSection}
        onActionClick={() => scrollToSection("contact")}
        isScrolled={isScrolled}
      />

      <Toolbar sx={{ pointerEvents: "none" }} />

      <HeroSection
        sectionRef={homeRef}
        copy={HERO_CONTENT}
        coreValues={CORE_VALUES}
        features={HERO_FEATURES}
        onPrimaryClick={() => scrollToSection("services")}
        onSecondaryClick={() => scrollToSection("contact")}
      />

      <AboutSection
        sectionRef={aboutRef}
        copy={ABOUT_COPY}
        highlights={ABOUT_HIGHLIGHTS}
        approachSteps={APPROACH_STEPS}
        spotlights={ABOUT_SPOTLIGHTS}
      />

      <ServicesSection
        sectionRef={servicesRef}
        services={SERVICE_OFFERINGS}
        onCtaClick={() => scrollToSection("contact")}
      />

      <ContactSection
        sectionRef={contactRef}
        copy={CONTACT_COPY}
        contactInfo={CONTACT_INFO}
        fields={CONTACT_FIELDS}
        formValues={formValues}
        onFieldChange={handleFieldChange}
        onSubmit={handleFormSubmit}
        loading={loading}
      />

      <Footer
        website="https://www.humalysehr.co.in"
        phones={CONTACT_INFO.phones}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;
