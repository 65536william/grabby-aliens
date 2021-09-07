import * as React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div className="min-h-screen lg:p-16 sm:p-10 p-5">
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
