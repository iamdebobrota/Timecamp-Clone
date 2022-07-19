import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        {new Date().getFullYear()}
        TimeCamp. Inc
      </Link>{" "}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize: "15px",
    color: "black",
    "&:hover": {
      color: "gold",
    },
  },
  footer_tags: {
    color: "black",
    "&:hover": {
      color: "gold",
    },
  },
  button: {
    margin: theme.spacing(1, 1.5),
    backgroundColor: "#00bf71",
    color: "white",
    fontWeight: "900px",
    fontSize: "12px",
    padding: "10px",
    borderRadius: "50px",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: "Product",
    description: [
      "Features",
      "Integrations",
      "Applications",
      "Product updates",
      "Customer Stories",
    ],
  },
  {
    title: "Support",
    description: [
      "Support",
      "Knowledge base",
      "Developers API",
      "Server Status",
    ],
  },
  {
    title: "Integrations",
    description: [
      "Trello",
      "Podio",
      "Asana",
      "Jira",
      "Insightly",
      "All integrations",
    ],
  },
  {
    title: "Resources",
    description: ["Contact", "HeySpace", "Jobs", "About us", "Press"],
  },
  {
    title: "Legal",
    description: ["Terms", "Privacy", "Security"],
  },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={5} sm={2} key={footer.title}>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                gutterBottom
                fontStyle="Karantina, cursive"
                style={{
                  textAlign: "left",
                  fontWeight: "800",
                  fontStyle: "Karantina,Roboto, cursive",
                }}
              >
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li
                    style={{ textAlign: "left", paddingTop: "10px" }}
                    key={item}
                  >
                    <Link
                      href="#"
                      variant="subtitle2"
                      color="textSecondary"
                      className={classes.footer_tags}
                      style={{ fontWeight: "550", textDecoration: "none" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
