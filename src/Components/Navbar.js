import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  activePath: {
    textDecoration: 'underline',
    fontWeight: 'bold'
  },

  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  subtitle: {
    fontSize: '15px',
    paddingLeft: '10px'
  }
}));

const redirect = (path) => {
  window.location.replace(path);
};

export default function Navbar({activePath}) {
  const classes = useStyles();
  const routes = [
    {
      slug: "Catàleg",
      url: "/catalog",
    },
    {
      slug: "Inspiració",
      url: "/inspiration",
    },
    {
      slug: "Visualitzador",
      url: "/visualizer",
    },
  ];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          UOC RV - PRA
          
        <Typography variant="body2" className={classes.subtitle}>
          Sergi Zamora
        </Typography>
        </Typography>
        {routes.map((route, index) => {
          return (
            <Button
              key={index}
              color="inherit"
              className={activePath === route.slug ? classes.activePath: ''}
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
