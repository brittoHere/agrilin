import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ReorderIcon from "@mui/icons-material/Reorder";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import "./SideBar.css";
import { Badge } from "@mui/material";

const SideBar = () => {
  const [dashboard, setDashboard] = useState(true);
  const [marketPlace, setMarketPlace] = useState(false);
  const [orders, setOrders] = useState(false);
  const [trade, setTrade] = useState(false);
  const [profile, setProfile] = useState(false);
  const [additional, setAdditional] = useState(false);
  const [notification, setNotification] = useState(false);
  const [settings, setSettings] = useState(false);
  const [support, setSupport] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const handleDashboard = () => {
    setDashboard(true);
    setMarketPlace(false);
    setOrders(false);
    setTrade(false);
    setProfile(false);
    setSupport(false);
    setNotification(false);
    setSettings(false);
  };
  const handleMarketPlace = () => {
    setMarketPlace(true);
    setDashboard(false);
    setOrders(false);
    setTrade(false);
    setProfile(false);
    setSupport(false);
    setNotification(false);
    setSettings(false);
  };
  const handleOrders = () => {
    setOrders(true);
    setMarketPlace(false);
    setDashboard(false);
    setTrade(false);
    setProfile(false);
    setSupport(false);
    setNotification(false);
    setSettings(false);
  };
  const handleTrade = () => {
    setTrade(true);
    setOrders(false);
    setMarketPlace(false);
    setDashboard(false);
    setProfile(false);
    setSupport(false);
    setNotification(false);
    setSettings(false);
  };
  const handleProfile = () => {
    setProfile(true);
    setOrders(false);
    setMarketPlace(false);
    setDashboard(false);
    setTrade(false);
    setSupport(false);
    setNotification(false);
    setSettings(false);
  };
  const handleAdditional = () => {
    setAdditional(!additional);
  };
  const handleNotification = () => {
    setProfile(false);
    setOrders(false);
    setMarketPlace(false);
    setDashboard(false);
    setTrade(false);
    setNotification(true);
    setSettings(false);
    setSupport(false);
  };
  const handleSettings = () => {
    setProfile(false);
    setOrders(false);
    setMarketPlace(false);
    setDashboard(false);
    setTrade(false);
    setSettings(true);
    setNotification(false);
    setSupport(false);
  };
  const handleSupport = () => {
    setProfile(false);
    setOrders(false);
    setMarketPlace(false);
    setDashboard(false);
    setTrade(false);
    setSupport(true);
    setNotification(false);
    setSettings(false);
  };
  const openMenu = () => {
    setDrawer(true);
  };
  const closeMenu = () => {
    setDrawer(false);
  };
  return (
    <div
      className={
        drawer ? "drawer__container" : "drawer__container bg-transperent"
      }
    >
      <div className="menu__bar">
        {drawer ? (
          <CloseIcon style={{ fontSize: "40px" }} onClick={() => closeMenu()} />
        ) : (
          <MenuIcon style={{ fontSize: "40px" }} onClick={() => openMenu()} />
        )}
      </div>
      {drawer && (
        <div className="sidebar__container--mobile">
          <div className="main__menu-txt">
            <h2 className="main__menu-heading">MAIN MENU</h2>
          </div>
          <div className="main__menu-contents">
            <div
              className={
                dashboard
                  ? "dashboard__container active"
                  : "dashboard__container"
              }
              onClick={() => handleDashboard()}
            >
              {dashboard && <div className="vertical__line" />}

              <DashboardIcon />
              <p
                className={
                  dashboard ? "dashboard__txt active" : "dashboard__txt"
                }
              >
                Dashboard
              </p>
            </div>

            <div
              className={
                marketPlace
                  ? "dashboard__container active"
                  : "dashboard__container"
              }
              onClick={() => handleMarketPlace()}
            >
              {marketPlace && <div className="vertical__line" />}

              <AddBusinessIcon />
              <p
                className={
                  marketPlace ? "dashboard__txt active" : "dashboard__txt"
                }
              >
                Market Place
              </p>
            </div>

            <div
              className={
                orders ? "dashboard__container active" : "dashboard__container"
              }
              onClick={() => handleOrders()}
            >
              {orders && <div className="vertical__line" />}

              <ReorderIcon />
              <p
                className={orders ? "dashboard__txt active" : "dashboard__txt"}
              >
                Create Orders
              </p>
            </div>

            <div
              className={
                trade ? "dashboard__container active" : "dashboard__container"
              }
              onClick={() => handleTrade()}
            >
              {trade && <div className="vertical__line" />}

              <LocalConvenienceStoreIcon />
              <p className={trade ? "dashboard__txt active" : "dashboard__txt"}>
                Create Trade
              </p>
            </div>

            <div
              className={
                profile ? "dashboard__container active" : "dashboard__container"
              }
              onClick={() => handleProfile()}
            >
              {profile && <div className="vertical__line" />}

              <AccountBoxIcon />
              <p
                className={profile ? "dashboard__txt active" : "dashboard__txt"}
              >
                Profile
              </p>
            </div>
          </div>
          <div
            className="additional__header-container"
            onClick={() => handleAdditional()}
          >
            <h2 className="additional__txt">ADDITIONAL</h2>
            {additional ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </div>
          {additional && (
            <div className="main__menu-contents">
              <div
                className={
                  notification
                    ? "dashboard__container active"
                    : "dashboard__container"
                }
                onClick={() => handleNotification()}
              >
                {notification && <div className="vertical__line" />}
                <div className="notification__container">
                  <NotificationsOutlinedIcon />
                  <p
                    className={
                      notification ? "dashboard__txt active" : "dashboard__txt"
                    }
                  >
                    Notification
                  </p>
                  <div className="badge__txt">
                    <Badge badgeContent={256} color="error" />
                  </div>
                </div>
              </div>

              <div
                className={
                  settings
                    ? "dashboard__container active"
                    : "dashboard__container"
                }
                onClick={() => handleSettings()}
              >
                {settings && <div className="vertical__line" />}

                <SettingsSuggestOutlinedIcon />
                <p
                  className={
                    settings ? "dashboard__txt active" : "dashboard__txt"
                  }
                >
                  Settings
                </p>
              </div>

              <div
                className={
                  support
                    ? "dashboard__container active"
                    : "dashboard__container"
                }
                onClick={() => handleSupport()}
              >
                {support && <div className="vertical__line" />}

                <CallOutlinedIcon />
                <p
                  className={
                    support ? "dashboard__txt active" : "dashboard__txt"
                  }
                >
                  Call Support
                </p>
              </div>
            </div>
          )}
          <div className="upgrade__container">
            <p className="upgrade__txt">Upgrade Your Plan</p>
            <div className="flex__contents">
              <p>
                Go To <span style={{ fontWeight: "bold" }}>PRO</span>
              </p>
              <p>
                <ArrowCircleRightOutlinedIcon />
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="sidebar__container">
        <div className="main__menu-txt">
          <h2 className="main__menu-heading">MAIN MENU</h2>
        </div>
        <div className="main__menu-contents">
          <div
            className={
              dashboard ? "dashboard__container active" : "dashboard__container"
            }
            onClick={() => handleDashboard()}
          >
            {dashboard && <div className="vertical__line" />}

            <DashboardIcon />
            <p
              className={dashboard ? "dashboard__txt active" : "dashboard__txt"}
            >
              Dashboard
            </p>
          </div>

          <div
            className={
              marketPlace
                ? "dashboard__container active"
                : "dashboard__container"
            }
            onClick={() => handleMarketPlace()}
          >
            {marketPlace && <div className="vertical__line" />}

            <AddBusinessIcon />
            <p
              className={
                marketPlace ? "dashboard__txt active" : "dashboard__txt"
              }
            >
              Market Place
            </p>
          </div>

          <div
            className={
              orders ? "dashboard__container active" : "dashboard__container"
            }
            onClick={() => handleOrders()}
          >
            {orders && <div className="vertical__line" />}

            <ReorderIcon />
            <p className={orders ? "dashboard__txt active" : "dashboard__txt"}>
              Create Orders
            </p>
          </div>

          <div
            className={
              trade ? "dashboard__container active" : "dashboard__container"
            }
            onClick={() => handleTrade()}
          >
            {trade && <div className="vertical__line" />}

            <LocalConvenienceStoreIcon />
            <p className={trade ? "dashboard__txt active" : "dashboard__txt"}>
              Create Trade
            </p>
          </div>

          <div
            className={
              profile ? "dashboard__container active" : "dashboard__container"
            }
            onClick={() => handleProfile()}
          >
            {profile && <div className="vertical__line" />}

            <AccountBoxIcon />
            <p className={profile ? "dashboard__txt active" : "dashboard__txt"}>
              Profile
            </p>
          </div>
        </div>
        <div
          className="additional__header-container"
          onClick={() => handleAdditional()}
        >
          <h2 className="additional__txt">ADDITIONAL</h2>
          {additional ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </div>
        {additional && (
          <div className="main__menu-contents">
            <div
              className={
                notification
                  ? "dashboard__container active"
                  : "dashboard__container"
              }
              onClick={() => handleNotification()}
            >
              {notification && <div className="vertical__line" />}
              <div className="notification__container">
                <NotificationsOutlinedIcon />
                <p
                  className={
                    notification ? "dashboard__txt active" : "dashboard__txt"
                  }
                >
                  Notification
                </p>
                <div className="badge__txt">
                  <Badge badgeContent={256} color="error" />
                </div>
              </div>
            </div>

            <div
              className={
                settings
                  ? "dashboard__container active"
                  : "dashboard__container"
              }
              onClick={() => handleSettings()}
            >
              {settings && <div className="vertical__line" />}

              <SettingsSuggestOutlinedIcon />
              <p
                className={
                  settings ? "dashboard__txt active" : "dashboard__txt"
                }
              >
                Settings
              </p>
            </div>

            <div
              className={
                support ? "dashboard__container active" : "dashboard__container"
              }
              onClick={() => handleSupport()}
            >
              {support && <div className="vertical__line" />}

              <CallOutlinedIcon />
              <p
                className={support ? "dashboard__txt active" : "dashboard__txt"}
              >
                Call Support
              </p>
            </div>
          </div>
        )}
        <div className="upgrade__container">
          <p className="upgrade__txt">Upgrade Your Plan</p>
          <div className="flex__contents">
            <p>
              Go To <span style={{ fontWeight: "bold" }}>PRO</span>
            </p>
            <p>
              <ArrowCircleRightOutlinedIcon />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
