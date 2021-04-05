//import useState hook to create menu collapse state
import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListIcon from "@material-ui/icons/List";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { blueGrey } from "@material-ui/core/colors";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const useStyles = makeStyles((theme) => ({
    grey: {
      color: theme.palette.getContrastText(blueGrey[500]),
      backgroundColor: blueGrey[500],
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginRight: "15px",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="avatar">
              {/* small and big change using menucollapse state */}
              <Avatar
                id="img-avatar"
                alt="Remy Sharp"
                src="/broken-image.jpg"
                className={classes.grey}
              >
                B
              </Avatar>
              <p
                style={{
                  paddingTop: "15px",
                  fontSize: menuCollapse ? "0px" : "18px",
                }}
              >
                Bavan Da
              </p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle style={{ fill: "#C5C6C7" }} />
              ) : (
                <FiArrowLeftCircle style={{ fill: "#C5C6C7" }} />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="round" styles>
              <MenuItem icon={<HomeIcon />}>Home</MenuItem>
              <MenuItem active={true} icon={<ListIcon />}>
                Dashboard
              </MenuItem>
              <MenuItem icon={<PersonIcon />}>Profile</MenuItem>
              <MenuItem icon={<FavoriteIcon />}>Favourite</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<ExitToAppIcon />}>Logout </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
