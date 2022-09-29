import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import "./Header.css";

const Header = () => {
  const [profileItems, setProfileItems] = useState(null);
  const [mobileProfileItems, setMobileProfileItems] = useState(null);
  const isMenuOpen = Boolean(profileItems);
  const isMobileMenuOpen = Boolean(mobileProfileItems);
  const handleProfileMenuOpen = (event) => {
    setProfileItems(event.currentTarget);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileProfileItems(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileProfileItems(null);
  };
  const handleMenuClose = () => {
    setProfileItems(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={profileItems}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileProfileItems}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button className="button__container">
          <IconButton color="inherit">
            <EditIcon />
          </IconButton>
          Talk to our sales team
        </Button>
      </MenuItem>
      <MenuItem>
        <IconButton
          style={{ marginLeft: "15px" }}
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        >
          <Badge badgeContent={4} color="error">
            <MailIcon style={{ color: "#111" }} />
          </Badge>
        </IconButton>
        <span
          style={{ marginLeft: "16px", fontSize: "14px", fontWeight: "bold" }}
        >
          Mails
        </span>
      </MenuItem>
      <MenuItem>
        <IconButton
          style={{ marginLeft: "15px" }}
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle style={{ color: "#111" }} />
        </IconButton>

        <span style={{ color: "#111", fontWeight: "bold" }}>
          Austin Robertson
          <div>
            <p style={{ color: "#111", fontWeight: "400" }}>
              Marketing Administrator
            </p>
          </div>
        </span>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="appbar__container" position="static">
        <Toolbar>
          <Typography
            className="header__size"
            style={{ color: "#111", fontWeight: "bold" }}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Agrilin
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button className="button__container">
              <IconButton color="inherit">
                <EditIcon />
              </IconButton>
              Talk to our sales team
            </Button>
            <IconButton
              style={{ marginLeft: "15px" }}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon style={{ color: "#111" }} />
              </Badge>
            </IconButton>
            <IconButton
              style={{ marginLeft: "15px" }}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle style={{ color: "#111" }} />
            </IconButton>

            <span style={{ color: "#111", fontWeight: "bold" }}>
              Austin Robertson
              <div>
                <p style={{ color: "#111", fontWeight: "400" }}>
                  Marketing Administrator
                </p>
              </div>
            </span>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon style={{ color: "#111" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Header;
