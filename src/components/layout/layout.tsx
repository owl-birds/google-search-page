// components
import TopBar from "../top-bar";
import Footer from "../footer";

import { PropsWithChildren } from "react";
import "./style.scss";
const Layout = (props: PropsWithChildren) => {
  return (
    <div className="page-layout">
      <TopBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
