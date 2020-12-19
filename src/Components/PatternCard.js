import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ModalImage from "react-modal-image";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
}));

export default function PatternCard({ ProductName, PatternUrl }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            {ProductName}
          </Typography>
          
          <ModalImage small={PatternUrl} large={PatternUrl} alt={ProductName} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
