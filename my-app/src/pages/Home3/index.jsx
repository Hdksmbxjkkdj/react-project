import { Hero } from "../Home1/hero";
import { Features } from "../Home1/features";
import { Adds } from "../Home1/adds";
import { BestSelling } from "../Home1/best-selling";
import { DealsOfTheDay } from "../Home2/DealsOfTheDay";
import { ProgressWrap } from "../Components/Progress-wrap";
import { OnSell } from "../Home1/on-sell";
import { FromTheBlog } from "../Home1/from-the-blog";
import { Banner } from "../Home1/hero/banner";
const Home3 = ()=> {
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
        { pic: 'banner-6.jpg', name:'banner-6'},
        { pic: 'banner-7.jpg', name:'banner-7'},
        { pic: 'banner-8.jpg', name:'banner-8'},
      ];
      var res1 = {
        item:6,
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
          items: 5
        },
        1600: {
          items: 6,
        }
      };
    return(
        <>
        <ProgressWrap></ProgressWrap>
        <Hero></Hero>
        <Features></Features>
        <Adds img={filename2}></Adds>
        <BestSelling res={res1}></BestSelling>
        <Adds img={filename3}></Adds>
        <DealsOfTheDay></DealsOfTheDay>
        <Adds img={filename4}></Adds>
        <OnSell res={res1}></OnSell>
        <Adds img={filename3}></Adds>
        <OnSell></OnSell>
        <OnSell></OnSell>
        <OnSell></OnSell>
        <Banner img={filename2}></Banner>
        <FromTheBlog></FromTheBlog>
        </>
    )
}

export {Home3};