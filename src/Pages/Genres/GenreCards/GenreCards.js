import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./GenreCards.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function GenreCards(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const backs=[
    "https://www.stockmusiclab.com/wp-content/uploads/2019/08/cropped-studio_aim_musiclab_royalty_free_background_music.jpg",
    "https://media.istockphoto.com/vectors/music-background-vector-id1076840920?b=1&k=6&m=1076840920&s=612x612&w=0&h=nztxOFS4yKFkGr54v-4rM6RcQAC0BpV3lYNWS8fMJdI=",
    "https://cdn.wallpapersafari.com/11/43/6AXtlL.jpg",
    "https://images.ctfassets.net/bdyhigkzupmv/3qbcPWr60odpUo4PE7aQ79/5848e32e4fec473461e65e82d1c25753/hero-generic-console-production.jpg",
    "https://cdn.britannica.com/03/151903-131-E310E9EC/Microphone-background-sound-waves-energy-Music.jpg",

  ]

  var sectionStyle = {
    width: "100%",
    height: "15rem",
    borderRadius: "7px",
    backgroundColor: "#283655",
    margin: "0.5rem 0.5rem 0.5rem 0.5rem",
    border: "0px none transparent",
    paddingBottom: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    backgroundImage: `url(`+backs[Math.floor(Math.random()*backs.length)]+`)`,
    backgroundSize: "100% 100%",
  };
  return (
    <div>
      <a href={'\\'+'genre'+'\\'+props.genre.name} style={sectionStyle} className="GenreButton" type="button">
        <div className="GenreTitleContainer">
          <h1 className="GenreCardTitle">{props.genre.name.substr(0,6)}</h1>
        </div>
      </a>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="GenresModalBody">
            <h1 id="ModalGenreTitle">{props.genre.name.substr(0,6)}</h1>
            <p id="ModalGenreDescription">{props.genre.description}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default GenreCards;
