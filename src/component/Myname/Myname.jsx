import React, { forwardRef } from "react";
import "./Myname.scss";
const Myname = ({ text }, ref) => {
  return <section className="myname_sec" ref={ref}>{text}</section>;
};

export default forwardRef(Myname);
