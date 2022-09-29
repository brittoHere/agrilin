import React from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import "./Body.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function createData(date, productDetail, status, Contractpdf, Actions) {
  return { date, productDetail, status, Contractpdf, Actions };
}

const rows = [
  createData(
    "01.02.2021",
    "Cummin Seeds (Whole Jeera)",
    "Active",
    "Download PDF",
    "VIEW ORDER"
  ),
  createData(
    "01.02.2021",
    "Cummin Seeds (Whole Jeera)",
    "Active",
    "Download PDF",
    "VIEW ORDER"
  ),
  createData(
    "01.02.2021",
    "Cummin Seeds (Whole Jeera)",
    "Active",
    "Download PDF",
    "VIEW ORDER"
  ),
  createData(
    "01.02.2021",
    "Cummin Seeds (Whole Jeera)",
    "Active",
    "Download PDF",
    "VIEW ORDER"
  ),
];

const Body = () => {
  return (
    <>
      <div className="body__container">
        <div className="img__card-container">
          <img
            className="img__style"
            src="https://thumbs.dreamstime.com/b/digital-technology-background-abstract-wave-connected-dots-lines-technology-science-banner-d-widescreen-digital-181088868.jpg"
            alt="banner__img"
          />
          <div className="card__container">
            <div className="img__span-flex">
              <img
                src="https://hotemoji.com/images/emoji/t/1ecpbwo1107ntt.png"
                alt="cloud__img"
              />
              <h1>29</h1>
              <span style={{ fontWeight: "bold" }}> °C </span>
            </div>
            <div className="bottom__txt">
              <p className="cloud__txt">Partially Cloudy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header__txt-container">
        <h2>
          Hi 👋 Austin,{" "}
          <span className="span__txt">here's your site overview</span>
        </h2>
      </div>
      <div className="order__statistics-flex">
        <div className="order__statistics-container">
          <p className="order__statistics-txt">🔥 Order Statistics</p>
        </div>

        <div className="activities__container">
          <p className="activities__txt">For all period</p>
          <div className="circle">
            <p className="monthly__txt">Monthly</p>
            <p className="activity__txt">Activities</p>
          </div>
          <div className="text__flex">
            <div className="order__block">
              <p className="total__orders">Total Orders</p>
              <p className="number__txt">72</p>
            </div>
            <div className="order__block">
              <p className="total__orders">Recieved Order</p>
              <p className="number__txt">89</p>
            </div>
          </div>
        </div>
      </div>
      <div className="order__statistics__contents-flex">
        <div className="active__icon-container">
          <div className="eye__icon">
            <RemoveRedEyeOutlinedIcon />
          </div>
          <div className="active__heading">
            <p className="active__txt">Active</p>
          </div>
          <div className="active__number">
            <p className="number">12,840</p>
          </div>
        </div>

        <div className="active__icon-container margin__left">
          <div className="eye__icon dispute__color">
            <ViewInArOutlinedIcon />
          </div>
          <div className="active__heading">
            <p className="active__txt dispute__txt">Dispute</p>
          </div>
          <div className="active__number">
            <p className="number">31,830</p>
          </div>
        </div>

        <div className="active__icon-container margin__left">
          <div className="eye__icon open__color">
            <OpenInNewOutlinedIcon />
          </div>
          <div className="active__heading">
            <p className="active__txt open__txt">Open</p>
          </div>
          <div className="active__number">
            <p className="number">22,890</p>
          </div>
        </div>

        <div className="active__icon-container margin__left">
          <div className="eye__icon cancel__color">
            <CloseOutlinedIcon />
          </div>
          <div className="active__heading">
            <p className="active__txt cancel__text">Cancel</p>
          </div>
          <div className="active__number">
            <p className="number">1,360</p>
          </div>
        </div>
      </div>
      <div className="table__container">
        <div className="title__row">
          <h4>Order Status Summary</h4>
          <div className="period__txt-container">
            <p className="period__txt">For all period 0-04</p>
            <ArrowDropDownOutlinedIcon style={{ fontSize: "18px" }} />
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table className="reduce__width" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date & Id</TableCell>
                <TableCell align="right">Product Detail</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Contract PDF File</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="right">{row.productDetail}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.Contractpdf}</TableCell>
                  <TableCell align="right">{row.Actions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Body;
