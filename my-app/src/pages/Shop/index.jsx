import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "../Components/pagination";
import { BrandSlider } from "../Product-Details/BrandSlider";
import { Sidebar } from "../Sidebar";
import { BreadCrumb } from "./BreadCrumb";
import { ProductGraidWrapper } from "./ProductGraidWrapper";
import { Tab } from "./Tab";
export const Products = ({ sidebars }) => {
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
  const [items, setItems] = useState();
  const [length, setLength] = useState();
  const Limit = 8;
  const [start, setStart] = useState(1);
  let params = new URLSearchParams(window.location.search);
  // params =(params.get("text"))? "text_like="+params.get("text"):"";
  useEffect(() => {
    axios
      .get(
        `http://localhost:313/best_selling?_start=${start}&_limit=${Limit}&${params}`
      )
      .then((response) => {
        console.log(response);
        setItems(response.data);
        setLength(response.data.length);
      });
  }, [start]);

  var paginationLength = length;
  paginationLength = Math.ceil(paginationLength / 8);
  //pagin
 
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
                  ></Tab>
                  <div class="row">
                    <div class="col-xxl-12">
                      <div class="basic-pagination pt-30 pb-30">
                        <Pagination
                          count={{ paginationLength, setStart, start, Limit }}
                        ></Pagination>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BrandSlider></BrandSlider>

        {/* <Favorite item={items}></Favorite> */}
      </main>
    </>
  );
};
