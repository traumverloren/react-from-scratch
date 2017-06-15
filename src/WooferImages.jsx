import React from "react";
import woofers from "../assets/doggo-lifecycle.jpg";
import doggos from "../assets/doggos-2.jpg";

const WooferImages = () =>
  <div>
    <h1>What is Doggo & Woofer?</h1>
    <img alt="woofers chart" src={woofers} />
    <h1>Is it Doggo or Woofer?</h1>
    <img alt="woofers chart 2" src={doggos} />
  </div>;

export default WooferImages;
