import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "../Components/paginationCopy";
import { BrandSlider } from "../Product-Details/BrandSlider";
import { Sidebar } from "../Sidebar";
import { BreadCrumb } from "./BreadCrumb";
import { ProductGraidWrapper } from "./ProductGraidWrapper";
import { Tab } from "./Tab";
export const Products = ({ sidebars }) => {
  //responsive OwlCarousel
  var res1 = {
    item: 6,
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    767: {
      items: 2,
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
  //responsive OwlCarousel

  const [items, setItems] = useState();
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(1);
  const Limit = 8;
  const [length, setLength] = useState();

  let params = new URLSearchParams(window.location.search);
  const [category, setCategory] = useState();
  useEffect(() => {
    axios.get(`http://localhost:313/product-category`).then((res) => {
      setCategory(res);
    });
  }, []);
  //allitems

  const [price, setPrice] = useState(); //برای پایگاه داده اصلی است
  useEffect(() => {
    axios.get(`http://localhost:313/domain-price`).then((res) => {
      setPrice(res);
    });
  }, []);
  //colors
  const [colors, setColors] = useState();
  useEffect(() => {
    axios.get(`http://localhost:313/colors`).then((res) => {
      setColors(res);
    });
  }, []);
  //size
  //colors
  const [size, setSize] = useState();
  useEffect(() => {
    axios.get(`http://localhost:313/sizing`).then((res) => {
      setSize(res);
    });
  }, []);
  //
  //allcomment
  const [productComment, setProductComment] = useState();

  useEffect(() => {
    axios.get(`http://localhost:313/product_comments`).then((response) => {
      setProductComment(response);
    });
  }, []);
  //allcomment
  //
  //
  //pagin

  // params =(params.get("text"))? "text_like="+params.get("text"):"";
  useEffect(() => {
    axios
      .get(
        `http://localhost:313/best_selling?${params}&_page=${start}&_limit=${Limit}`
        //  `http://localhost:313/best_selling?${params}&_page=${start}&_per_page=${Limit}`
      )
      .then((response) => {
        setItems(response.data);
        // console.log(response.data,'response.data')
        // setLength(response.data.length);
        console.log(length, "index", items);
      });
    // console.log(page,"page")
  }, [start]);
  // console.log(items?.data?.length,"lllll")

  //pagin
  //
  useEffect(() => {
    axios.get(`http://localhost:313/best_selling`).then((response) => {
      // setStart(response.data.length);
      // setPage(response.data.length);
      setLength(response);
    });
  }, [start]);
  var paginationLength = length?.data.length;
  paginationLength = Math.ceil(paginationLength / Limit);
  //
  console.log(length?.data.length, "  length?.data.length");
  return (
    <>
      <main>
        <BreadCrumb></BreadCrumb>

        <section className="product__area box-plr-75 pb-70">
          <div className="container-fluid">
            <div className="row">
              <Sidebar
                domain_price={price}
                colors={colors}
                size={size}
                productLength={items?.length}
                setItems={setItems}
                items={items}
              ></Sidebar>
              <div className="col-xxl-10 col-xl-9 col-lg-8 order-first order-lg-last m">
                <div className="product__grid-wrapper">
                  <ProductGraidWrapper></ProductGraidWrapper>
                </div>
                <div className="product__grid-item-wrapper pt-70">
                  <Tab
                    key={Math.random()}
                    setItems={setItems}
                    items={items}
                    productLength={productComment?.length}
                    length={length}
                    all={page}
                  ></Tab>
                  <div class="row">
                    <div class="col-xxl-12">
                      <div class="basic-pagination pt-30 pb-30">
                        <Pagination
                          count={{ paginationLength, setPage, setStart, Limit }}
                        ></Pagination>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BrandSlider res1={res1}></BrandSlider>

        {/* <Favorite item={items}></Favorite> */}
      </main>
    </>
  );
};
