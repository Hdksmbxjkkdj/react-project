import { Hero } from "./hero";
import { Banner } from "./hero/banner";
import { Features } from "./features";
import { BestSelling } from "./best-selling";
import { Adds } from "./adds";
import { FlashDeal } from "./flashdeal";
import { OnSell } from "./on-sell";
import { FromTheBlog } from "./from-the-blog";
import { ProgressWrap } from "../Components/Progress-wrap";
import { useEffect, useState } from "react";
import axios from "axios";
var filename1 = [
  { pic: "top/banner-top-1.jpg", name: "banner-1" },
  { pic: "top/banner-top-2.jpg", name: "banner-2" },
];
var filename2 = [
  { pic: "banner-1.jpg", name: "banner-1" },
  { pic: "banner-2.jpg", name: "banner-2" },
  { pic: "banner-3.jpg", name: "banner-3" },
];
var filename3 = [
  { pic: "banner-4.jpg", name: "banner-1" },
  { pic: "banner-5.jpg", name: "banner-2" },
];
var filename4 = [
  { pic: "banner-6.jpg", name: "banner-1" },
  { pic: "banner-7.jpg", name: "banner-2" },
  { pic: "banner-8.jpg", name: "banner-2" },
];
var res1 = {
  item: 6,
  0: {
    items: 1,
  },
  576: {
    items: 2,
  },
  767: {
    items: 3,
  },
  992: {
    items: 4,
  },
  1200: {
    items: 5,
  },
  1600: {
    items: 6,
  },
};

const Home1 = () => {
  return (
    <>
      <ProgressWrap></ProgressWrap>
      <Hero></Hero>
      <Features></Features>
      <Adds img={filename2}></Adds>
      <BestSelling res={res1}></BestSelling>
      <Adds img={filename3}></Adds>
      <FlashDeal res={res1}></FlashDeal>
      <Adds img={filename4}></Adds>
      <OnSell res={res1}></OnSell>
      <FromTheBlog res={res1}></FromTheBlog>
    </>
  );
};

export { Home1 };
