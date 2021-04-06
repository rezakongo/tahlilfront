import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 4px",
    display: "flex",
    alignItems: "center",
    width: 350,
    backgroundColor: "#2d3b4a",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "white",
  },
  iconButton: {
    color: "black",
    backgroundColor: "#45a29e",
    padding: 10,
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "#007370",
      color: "#000",
    },
  },
}));

function SearchInput() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
