import { Sidebar } from "../Blog/sidebar";
import { SidebarItem } from "../Blog/sidebar-item";
import { SidebarItem1 } from "../Blog/sidebar-item-1";
import { PostBox } from "./postbox";

const BlogDetaile = (props) => {
  const items = [
    {
      pic: "blog-1.jpg",
      alt: "blog",
      title: "Koma and Torus",
      text: "Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel.",
      date: "July 21, 2021",
      category: "Travel",
    },
    {
      pic: "blog-2.jpg",
      alt: "blog",
      title: "Grip and Allows",
      text: "Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel.",
      date: "July 21, 2021",
      category: "Travel",
    },
    {
      pic: "blog-3.jpg",
      alt: "blog",
      title: "Pitterarum Formas",
      text: "Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel.",
      date: "July 21, 2021",
      category: "Travel",
    },
    {
      pic: "blog-4.jpg",
      alt: "blog",
      title: "Shelving Burgundy",
      text: "Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel.",
      date: "July 21, 2021",
      category: "Travel",
    },
  ];
  const sidebarItem = [
    {
      pic: "blog-sm-1.jpg",
      alt: "blog",
      title: "Curabitur Lobortis News",
      date: "July 21 2021",
    },
    {
      pic: "blog-sm-2.jpg",
      alt: "blog",
      title: "The Brushed Steel",
      date: "July 21 2021",
    },
    {
      pic: "blog-sm-3.jpg",
      alt: "blog",
      title: "Koma and Torus",
      date: "July 21 2021",
    },
    {
      pic: "blog-sm-4.jpg",
      alt: "blog",
      title: "Grip and Allows",
      date: "July 21 2021",
    },
    {
      pic: "blog-sm-5.jpg",
      alt: "blog",
      title: "Pitterarum Formas",
      date: "July 21 2021",
    },
    {
      pic: "blog-sm-6.jpg",
      alt: "blog",
      title: "Shelving Burgundy",
      date: "July 21 2021",
    },
    {
      pic: "blog-sm-7.jpg",
      alt: "blog",
      title: "Anteposue Rarum Formas",
      date: "July 21 2021",
    },
    {
      pic: "blog-sm-8.jpg",
      alt: "blog",
      title: "Posuerit Litterarum Formas",
      date: "July 21 2021",
    },
    {
      pic: "blog-sm-9.jpg",
      alt: "blog",
      title: "KAnteposuerit Litterarum Formas",
      date: "July 21 2021",
    },
    {
      pic: "blog-sm-10.jpg",
      alt: "blog",
      title: "Curabitur Lobortis",
      date: "July 21 2021",
    },
  ];
  const sidebar = [
    { category: "Videos" },
    { category: "Uncategorized" },
    { category: "Travel" },
    { category: "Music" },
    { category: "Photography" },
    { category: "Images" },
    { category: "Creative" },
    { category: "Azone Post" },
  ];
  const sidebar1 = [
    { category: "April 202200000" },
    { category: "January 2021" },
  ];
  const pagination = [{ number: "1" }, { number: "2" }, { number: "3" }];
  const comment = [
    {
      pic: "avater-1.png",
      name: "Siarhei Dzenisenka",
      date: "- 3 months ago",
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    },
    {
      pic: "avater-2.png",
      name: "Julias Roy",
      date: "- 6 months ago",
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
      child:"true",
    },
    {
      pic: "avater-3.png",
      name: "Arista Williamson",
      date: "- 6 months ago",
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    },
  ];
  return (
    <>
      <section className="blog__area box-plr-75 pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-2 col-xl-3 col-lg-4">
              <Sidebar>
                <SidebarItem items={sidebar}></SidebarItem>
                <SidebarItem1 items={sidebarItem}></SidebarItem1>
                <sidebarItem items={sidebar1}></sidebarItem>
              </Sidebar>
            </div>
            <div className="col-xxl-10 col-xl-9 col-lg-8 order-first order-lg-last">
              <div className="row">
                <div className="col-xxl-12">
                  <PostBox item={comment}></PostBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetaile;
