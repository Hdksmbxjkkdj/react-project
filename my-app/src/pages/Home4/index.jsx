import { Hero } from "../Home1/hero";
import { Features } from "../Home1/features";
import { ProgressWrap } from "../Components/Progress-wrap";
import { HomeWrapper } from "./home-wrapper";
import { Banner } from "../Home1/hero/banner";
import { SideSlider } from "./sideslider";
import { ProductItemflex } from "../Home1/best-selling/product-item/product-item";
import { BlogItem } from "../Home1/best-selling/product-item/blog-item";
import { Testimonial } from "./testimonial";
import { HomeMain } from "./home-main";
import { BestSelling } from "../Home1/best-selling";
import { Adds } from "../Home1/adds";
import { DealSlider } from "./dealslider";
import { ProductDealItem } from "./product-deal-item";
const Home4 = () => {
  const items = [1, 2, 3, 4, 5];
  const testimonial = [
    {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat orci sed nibh ultricies, eget sollicitudin quam consectetur. Donec at mattis purus, ut accumsan nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat orci new sed nibh ultricies”",
      pic: "testimonial-1.jpg",
      name: "Shahnewaz Sakil",
      job: "Developer",
    },
  ];
  var filename3 = [
    { pic: "banner-10.png", name: "banner-10" },
    { pic: "banner-11.png", name: "banner-11" },
  ];
  var filename4 = [
    { pic: "banner-12.png", name: "banner-12" },
    { pic: "banner-13.png", name: "banner-13" },
    { pic: "banner-14.png", name: "banner-14" },
  ];
  var filename5 = [
    { pic: "banner-15.png", name: "banner-15" },
    { pic: "banner-16.png", name: "banner-16" },
  ];
  var product = [
    {
      pic: "product/product-15.jpg",
      alt: "product",
      secpic: "product/product-24.jpg",
      offer: "34%",
      title: " Original Mobile Android Dual SIM Smart Phone G3 ",
      count: "$120.00",
      del: "$125.00",
      text: "Typi non habent claritatem insitam, est usus legentis in iis qui facit...",
      timetitle: "Hurry Up! Offer ends in:",
    },
    {
      pic: "product/product-16.jpg",
      alt: "product",
      secpic: "product/product-25.jpg",
      offer: "20%",
      title: " Sunset analog watch pink color ",
      count: "$70.00",
      del: "$90.00",
      text: "Typi non habent claritatem insitam, est usus legentis in iis qui facit...",
      timetitle: "Hurry Up! Offer ends in:",
    },
    {
      pic: "product/product-17.jpg",
      alt: "product",
      secpic: "product/product-26.jpg",
      offer: "12%",
      title: " Headphone for gaming, Black & Red Color",
      count: "$50.00",
      del: "$65.00",
      text: "ypi non habent claritatem insitam, est usus legentis in iis qui facit...",
      timetitle: "Hurry Up! Offer ends in:",
    },
  ];
  return (
    <>
      <ProgressWrap></ProgressWrap>
      <Hero></Hero>
      <Features></Features>
      <div className="home-wrapper">
        <div className="container custom-container">
          <div className="row">
            <HomeWrapper>
              <Banner src={"banner-9.png"}></Banner>
              <SideSlider title={"Top RateProducts"}>
                {items.map(() => {
                  return <ProductItemflex type={"flex"}></ProductItemflex>;
                })}
              </SideSlider>
              <SideSlider title={"From TheBlog"}>
                <BlogItem></BlogItem>
              </SideSlider>
              <SideSlider>
                {items.map(() => {
                  return <ProductItemflex type={"flex"}></ProductItemflex>;
                })}
              </SideSlider>
              <Banner src={"banner-17.png"}></Banner>
              <SideSlider title={""}>
                {testimonial.map((e) => {
                  return (
                    <Testimonial
                      text={e.text}
                      pic={e.pic}
                      name={e.name}
                      job={e.job}
                    ></Testimonial>
                  );
                })}
              </SideSlider>
            </HomeWrapper>
            <HomeMain>
              <DealSlider>
                {product.map((item) => {
                  return <ProductDealItem product={item}></ProductDealItem>;
                })}
              </DealSlider>
              <BestSelling></BestSelling>
              <Adds img={filename3}></Adds>
              <BestSelling></BestSelling>
              <Adds img={filename4}></Adds>
              <BestSelling></BestSelling>
              <Adds img={filename5}></Adds>
              <BestSelling></BestSelling>
              <BestSelling></BestSelling>
            </HomeMain>
          </div>
        </div>
      </div>
    </>
  );
};

export { Home4 };
