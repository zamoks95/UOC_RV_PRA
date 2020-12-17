import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

const redirect = (path) => {
  window.location.replace(path);
};

export default function Navbar() {
  const classes = useStyles();
  const routes = [
    {
      slug: "Home",
      url: "/",
    },
    {
      slug: "Catalog",
      url: "/catalog",
    },
    {
      slug: "Inspiration",
      url: "/inspiration",
    },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          UOC RV - PRA
        </Typography>
        {routes.map((route, index) => {
          return (
            <Button
              key={index}
              color="inherit"
              onClick={() => {
                redirect(route.url);
              }}
            >
              {route.slug}
            </Button>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}
