import React from "react";
import AddpeopleImg from "../assets/addpepole.svg";
import Navbar from "../components/Navbar";
import MobileNav from "../components/mobilebottomnav";
const Addpeople = () => {
  return (
    <div className="addpeople">
      <Navbar></Navbar>
      <img src={AddpeopleImg} alt="" className="addpeopleimg" />
      <MobileNav></MobileNav>
    </div>
  );
};

export default Addpeople;
