import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import Button from "./CustomButtons/Button.js";
import Avatar from "react-avatar-edit";
import CustomInput from "./CustomInput/CustomInput.js";
import GridItem from "./Grid/GridItem.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";
import GridContainer from "./Grid/GridContainer.js";
import CardFooter from "./Card/CardFooter.js";
import "./UploadModal.css";
import axios from "axios";
import ReactDOM from "react-dom";
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

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal(props) {
  const classes = useStyles();
  const [preview, setPreview] = React.useState(null);
  const [image, setImage] = React.useState(props.image);

  React.useEffect(() => {
    setImage(props.image);
  }, [props.image]);

  const onClose = () => {
    setPreview(null);
    setImage(null);
    props.OnClose();
    props.refresh();
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 7168000) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const onSave = () => {
    let formData = new FormData();
    console.log(preview);

    if (preview === null) {
      alert("please choose a file");
    } else {
      fetch(preview)
        .then((res) => res.blob())
        .then((res) => {
          console.log(res);

          formData.append("first_name", "");
          formData.append("last_name", "");
          formData.append("email", "test14327926543@gmail.com");
          formData.append("description", "hais");

          console.log(props.email);
          formData.append("avatar", new File([res], "test.png"));

          axios
            .put("http://127.0.0.1:8000/update_profile/", formData, {
              headers: {
                Authorization: `Token ${localStorage.getItem("autToken")}`,
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response);
              onClose();
            })
            .catch((error) => {
              console.log(error.response);
              alert(error.response);
            });
        });
    }
  };
  if (props.image === null || image === null) return <div></div>;
  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.OnClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Card>
            <CardBody>
              <Avatar
                imageHeight={300}
                imageWidth={300}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                onClick={props.open}
                id="uploadAvatar"
                label="Choose a file"
                labelStyle={{ color: "white", fontSize: "20px" }}
                exportAsSquare={true}
                src={image}
              />
            </CardBody>
            <CardFooter>
              <div>
                <Button
                  color="primary"
                  type="submit"
                  id="uploadBtn"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button color="primary" type="submit" onClick={onSave}>
                  Save
                </Button>
              </div>
            </CardFooter>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}
