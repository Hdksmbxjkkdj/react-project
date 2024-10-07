import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Select } from "./Select";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Product, ProductList } from "./Product";
import {Test} from "./Test"
export const Tab = ({ items, setItems, productLength, length, all, count,getData,data }) => {
  console.log(setItems,"ta")
  //tab
  const [toggleState, setToggleStata] = useState(2);

  //tab
  const toggleTab = (index) => {
    setToggleStata(index);
  };
  return items?.length > 0 ? (
    <>
      <div className="product__filter mb-50">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="product__filter-left d-sm-flex align-items-center">
              <div className="product__col">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={
                        toggleState === 1 ? "nav-link" : "nav-link active"
                      }
                      id="FourCol-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#FourCol"
                      type="button"
                      role="tab"
                      aria-controls="FourCol"
                      aria-selected="true"
                      onClick={() => toggleTab(1)}
                    >
                      <FontAwesomeIcon
                        icon={faBorderAll}
                        className="fal fa-border-all"
                      ></FontAwesomeIcon>
                    </button>
                  </li>
                
                  <li className="nav-item" role="presentation">
                    <button
                      className={
                        toggleState === 2 ? "nav-link" : "nav-link active"
                      }
                      id="list-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#list"
                      type="button"
                      role="tab"
                      aria-controls="list"
                      aria-selected="false"
                      onClick={() => toggleTab(2)}
                    >
                      <FontAwesomeIcon
                        icon={faList}
                        className="fal fa-list"
                      ></FontAwesomeIcon>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="product__result pl-60">
                {/* <p>Showing 1-20 of 29 relults</p> */}
                
                <p className="me-4">
                  نتیجه نمایش {items?.length}محصول از {length?.data?.length}{" "}
                </p>
              </div>
              

             
            </div>
           
          </div>
          <Test getData={getData} setItems={setItems} productLength={productLength}></Test>
          {/* <Select setItems={setItems} items={items} getData={getData}></Select> */}
        </div>
      </div>
      <div className="tab-content" id="productGridTabContent">
        <div
          className={
            toggleState === 1 ? "tab-pane fade" : "tab-pane fade show active"
          }
          id="FourCol"
          role="tabpanel"
          aria-labelledby="FourCol-tab"
        >
          
          <div className="row" style={{ minHeight: "680px" }}>
            {
              //    length> 0 ? (
              items?.length > 0 ? (
                <Product
                  key={Math.random()}
                  setItems={setItems}
                  items={items}
                ></Product>
              ) : (
                <div class="text-center justify-content-center p-3 Larger rounded">
                  <h2
                    class="d-flex text-center justify-content-center text-warning shadow"
                    style={{ backgroundColor: "#e0e0e0" }}
                  >
                    محصولی وجود ندارد
                  </h2>
                </div>
              )
            }
          </div>
        </div>

        <div
          className={
            toggleState === 2 ? "tab-pane fade" : "tab-pane fade show active"
          }
          id="list"
          role="tabpanel"
          aria-labelledby="list-tab"
        >
          <div className="row">
            <ProductList
              key={Math.random()}
              setItems={setItems}
              items={items}
              productLength={productLength}
            ></ProductList>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div class="text-center justify-content-center p-3 Larger rounded">
        <h2
          class="d-flex text-center justify-content-center text-warning shadow"
          style={{ backgroundColor: "#e0e0e0" }}
        >
          محصولی وجود ندارد
        </h2>
      </div>
    </>
  );
};
