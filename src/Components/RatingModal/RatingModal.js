import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import ProfileRatingCard from "../ProfileRatingCard/ProfileRatingCard"
import "./RatingModal.css"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
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

export default function RatingModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" className="modalBut" onClick={handleOpen}>
        Show More
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
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
          <div className="modalTemplate">
            <h2 className="ModalTitle">Ratings</h2>
            <div className="ModalCardsContainer">
              <div class="container-fluid !direction !spacing">
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 rateContainer">
                      <ProfileRatingCard/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}