import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";

const useStyles = makeStyles(() => ({
  action: {
    backgroundColor: "#45a29e",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: "#007370",
      color: "#000",
    },
  },
  title: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    color: "rgba(255, 255, 255, 0.87)",
    fontSize: "1rem",
    lineHeight: 1,
    textAlign: "left",
  },
  subtitle: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    color: "#a3b4bb",
    fontSize: "0.75rem",
    lineHeight: 1.6,
    textAlign: "left",
  },
}));

function Cardplay(props) {
  const styles = useStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 4 });
  const avatarStyles = useDynamicAvatarStyles({ radius: 50, size: 40 });
  return (
    <Row
      p={1}
      gap={2}
      bgcolor={"#2d3b4a"}
      borderRadius={10}
      margin={1.2}
      width={290}
    >
      <Item>
        <Avatar classes={avatarStyles} src={props.albumCover} />
      </Item>
      <Info position={"middle"}>
        <InfoTitle className={styles.title}>{props.albumName}</InfoTitle>
        <InfoSubtitle className={styles.subtitle}>
          {props.singerName}
        </InfoSubtitle>
      </Info>
      <Item ml={3} position={"middle"}>
        <IconButton className={styles.action} classes={iconBtnStyles}>
          <PlayArrow />
        </IconButton>
      </Item>
    </Row>
  );
}

export default Cardplay;
