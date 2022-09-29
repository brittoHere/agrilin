import React from "react";
import {
  HeaderComponent,
  SideBarComponent,
  BodyComponent,
  FooterComponent,
} from "../../Components";

const Dashboard = () => {
  return (
    <div>
      <HeaderComponent />
      <SideBarComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

export default Dashboard;
