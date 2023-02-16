import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
