import React, { PropsWithChildren } from "react";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <main>
        {children}
      </main>
    </>
  );
};
export default Layout;
