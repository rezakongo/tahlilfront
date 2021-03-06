import React from "react";
import cx from "clsx";
import Artist from "./artist-pinkfloyd.jpg";
import { makeStyles } from "@material-ui/core/styles";
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
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import Flag from "react-world-flags";

const titleFontSize = "1.2em";
const subtitleFontSize = "1.1rem";
const captionFontSize = "0.9rem";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
    backgroundColor: "#283655",
    "&:hover": {
      backgroundColor: "#4d648d",
    },
  },
  media: {
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(2),
      marginTop: 0,
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  title: {
    color: "white",
    fontSize: titleFontSize,
    lineHeight: 1.4,
  },
  subtitle: {
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
    width:'7rem'
  },
  flag: {
    margin: spacing(1),
  },
}));

function HomePageArtist(props) {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  const mediaStyles = useSquareCardMediaStyles();
  return (
    <a href={`artist\\${props.artistt.id}`}>
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={props.artistt.photo}
      />
      <CardContent>
        <Info className={styles.content}>
          <InfoTitle className={styles.title}>{props.artistt.name}</InfoTitle>
          <Flag
            className={styles.flag}
            code={props.artistt.country}
            height="20rem"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
          <InfoCaption className={styles.captionyear}>{props.artistt.life_span.span}</InfoCaption>
          <InfoCaption className={styles.captiongenre}>
            {props.artistt.followings} Followers
          </InfoCaption>
        </Info>
      </CardContent>
    </Card>
    </a>
  );
}
export default HomePageArtist;
