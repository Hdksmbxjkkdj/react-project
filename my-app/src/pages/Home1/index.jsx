import { Header } from "../Components/Header";
import { Hero } from "./hero";
import { Features } from "./features";
import { BestSelling } from "./best-selling";
import { Adds } from "./adds";
import { FlashDeal } from "./flashdeal";
import { OnSell } from "./on-sell";
import { FromTheBlog } from "./from-the-blog";
var filename1 = [
    { pic: 'top/banner-top-1.jpg', name:'banner-1'},
    { pic: 'top/banner-top-2.jpg', name:'banner-2'},
  ];
  var filename2 = [
    { pic: 'banner-1.jpg', name:'banner-1'},
    { pic: 'banner-2.jpg', name:'banner-2'},
    { pic: 'banner-3.jpg', name:'banner-3'},
  ];
  var filename3 = [
    { pic: 'banner-4.jpg', name:'banner-1'},
    { pic: 'banner-5.jpg', name:'banner-2'},
  ];
  var filename4 = [
    { pic: 'banner-6.jpg', name:'banner-1'},
    { pic: 'banner-7.jpg', name:'banner-2'},
    { pic: 'banner-8.jpg', name:'banner-2'},
  ];
const Home1 = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Adds img={filename2}></Adds>
      <BestSelling></BestSelling>
      <Adds img={filename3}></Adds>
      <FlashDeal></FlashDeal>
      <Adds img={filename4}></Adds>
      <OnSell></OnSell>
      <FromTheBlog></FromTheBlog>
    </>
  );
};

export {Home1};