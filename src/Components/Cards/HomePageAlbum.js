import React from "react";
import cx from "clsx";
import Cover from "./cover-dsotm.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useSquareCardMediaStyles } from "@mui-treasury/styles/cardMedia/square";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

const titleFontSize = "1em";
const subtitleFontSize = "1rem";
const captionFontSize = "0.8rem";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    transition: "0.3s",
    borderRadius: 12,
    padding: 6,
    backgroundColor: "#283655",
    "&:hover": {
      backgroundColor: "#4d648d",
    },
  },
  media: {
    borderRadius: 6,
  },
  title: {
    color: "white",
    fontSize: titleFontSize,
    fontWeight: 600,
    lineHeight: 1.4,
  },
  subtitle: {
    color: "white",
    fontSize: subtitleFontSize,
    fontStyle: "italic",
    lineHeight: 1.2,
  },
  captiongenre: {
    color: "#7ba1d5",
    fontSize: captionFontSize,
    lineHeight: 1.2,
  },
  captionyear: {
    color: "#d57b7b",
    fontSize: captionFontSize,
    lineHeight: 1.2,
  },
  rating: {
    paddingTop: "0.4rem",
  },
}));

function HomePageAlbum(props) {
  const styles = useStyles();
  const mediaStyles = useSquareCardMediaStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card className={cx(styles.root)}>
      <CardMedia className={cx(styles.media, mediaStyles.root)} image={Cover} />
      <CardContent>
        <Info>
          <InfoTitle className={styles.title}>Pink Floyd</InfoTitle>
          <InfoSubtitle className={styles.subtitle}>
            The Dark Side of the Moon
          </InfoSubtitle>
          <Rating
            className={styles.rating}
            name={"rating"}
            value={4.5}
            precision={0.5}
            size={"small"}
            readOnly={true}
          ></Rating>
          <InfoCaption className={styles.captionyear}>1973</InfoCaption>
          <InfoCaption className={styles.captiongenre}>
            progressive rock, rock, art rock, psychedelic rock, classic rock
          </InfoCaption>
        </Info>
      </CardContent>
    </Card>
  );
}
export default HomePageAlbum;
