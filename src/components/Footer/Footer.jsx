import { Container, Grid, Typography, Link as MuiLink } from "@mui/material";
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-8 mt-24 bottom-0 w-full">
      <Container>
        <Grid
          container
          direction="row"
          spacing={5}
          className="md:min-h-96 justify-center items-stretch md:justify-between"
        >
          {/* Exclusive Section */}
          <Grid
            item
            xs={12} // Stack vertically on small screens
            sm={6}
            md={2.5}
            className="justify-center items-stretch md:justify-between md:leading-5"
          >
            <Typography className="font-bold" variant="h6" gutterBottom>
              Exclusive
            </Typography>
            <Typography className="font-medium" gutterBottom>
              {i18n.t("footer.subscribe")}
            </Typography>
            <Typography variant="body2">{i18n.t("footer.offer")}</Typography>
          </Grid>

          {/* Support Section */}
          <Grid
            item
            xs={12} // Stack vertically on small screens
            sm={6}
            md={2.5}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.support")}
            </Typography>
            <Typography variant="body2">Address: Gujarat, Ahmedabad</Typography>
            <Typography variant="body2">Email: sahil@gmail.com</Typography>
            <Typography variant="body2">Phone: +91 9173531494</Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid
            item
            xs={12} // Stack vertically on small screens
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.quickLinks")}
            </Typography>
            <ul className="list-none p-0">
              <li>
                <MuiLink component={Link} to="/allProducts" sx={{ color: "white" }}>
                  {i18n.t("allProducts.redTitle")}
                </MuiLink>
              </li>
              <li>
                <MuiLink component={Link} to="/category" sx={{ color: "white" }}>
                  {i18n.t("category.redTitle")}
                </MuiLink>
              </li>
              <li>
                <MuiLink onClick={scrollToTop} to="about" sx={{ color: "white" }}>
                  {i18n.t("footer.usage")}
                </MuiLink>
              </li>
              <li>
                <MuiLink onClick={scrollToTop} to="about" sx={{ color: "white" }}>
                  {i18n.t("footer.FAQ")}
                </MuiLink>
              </li>
              <li>
                <MuiLink onClick={scrollToTop} to="/contact" sx={{ color: "white" }}>
                  {i18n.t("footer.Contact")}
                </MuiLink>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright Section */}
      <hr className="w-full border-gray-800 my-4" />
      <Typography variant="body2" className=" text-center text-gray-600">
        {i18n.t("footer.copyrights")}
      </Typography>
    </footer>
  );
};

export default Footer;
