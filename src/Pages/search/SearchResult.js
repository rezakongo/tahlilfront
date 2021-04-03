import logo from "./logo.svg";
import cover from "./Cover.jpg";

import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#1f2833",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    color: "#c5c6c7",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 120,
    height: 120,
    margin: 10,
  },
}));

function SearchResult() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={cover}
        title="Album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            In Utero
          </Typography>
          <Typography variant="subtitle1">
            Nirvana
          </Typography>
          <Typography variant="subtitle2">1993</Typography>
          <Typography variant="subtitle2">
            grunge, alternative rock, rock, noise rock, pop rock
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default SearchResult;
