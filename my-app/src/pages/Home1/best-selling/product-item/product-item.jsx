import { ProductThumb } from "./product-thumb";
import { ProductThumbflex } from "./product-thumb";
import { ProductContent } from "./product-content";
import { ProductAddbtn } from "./product-add-btn";
const ProductItem = (type) => {
  const items = [
    {
      image: "product-1.jpg",
      subimage: "product-2.jpg",
      text: "High Quality Glass Ultra-Thin Kitchen Scale",
      price: "$500.00",
    },
    {
      image: "product-3.jpg",
      subimage: "product-4.jpg",
      text: " LG 27UD58: £347.21, Ebuyer.com ",
      price: "$560.00",
    },
    {
      image: "product-5.jpg",
      subimage: "product-6.jpg",
      text: " Samsung C49J89: £875, Debenhams Plus  ",
      price: "$450.00",
    },
    {
      image: "product-7.jpg",
      subimage: "product-8.jpg",
      text: " Blink Home Security Camera System 01   ",
      price: "$720.00",
    },
    {
      image: "product-9.jpg",
      subimage: "product-10.jpg",
      text: " Blue t-shir for men (X, M, XL, XXL)   ",
      price: "$720.00",
    },
    {
      image: "product-11.jpg",
      subimage: "product-12.jpg",
      text: " Samsung A20 Pro Ultra CPU 4/64 GB  ",
      price: "$720.00",
    },
    {
      image: "product-13.jpg",
      subimage: "product-14.jpg",
      text: " Blink Home Security Camera System 01   ",
      price: "$720.00",
    },
  ];
  return (
    <>
      <div className="product__item white-bg">
        <ProductThumb item={items}></ProductThumb>
        <ProductContent></ProductContent>
        <ProductAddbtn></ProductAddbtn>
      </div>
    </>
  );
};

const ProductItemflex = (type) => {
  const items = [
    {
      image: "product-1.jpg",
      subimage: "product-2.jpg",
      text: "High Quality Glass Ultra-Thin Kitchen Scale",
      price: "$500.00",
    },
    {
      image: "product-3.jpg",
      subimage: "product-4.jpg",
      text: " LG 27UD58: £347.21, Ebuyer.com ",
      price: "$560.00",
    },
    {
      image: "product-5.jpg",
      subimage: "product-6.jpg",
      text: " Samsung C49J89: £875, Debenhams Plus  ",
      price: "$450.00",
    },
    {
      image: "product-7.jpg",
      subimage: "product-8.jpg",
      text: " Blink Home Security Camera System 01   ",
      price: "$720.00",
    },
    {
      image: "product-9.jpg",
      subimage: "product-10.jpg",
      text: " Blue t-shir for men (X, M, XL, XXL)   ",
      price: "$720.00",
    },
    {
      image: "product-11.jpg",
      subimage: "product-12.jpg",
      text: " Samsung A20 Pro Ultra CPU 4/64 GB  ",
      price: "$720.00",
    },
    {
      image: "product-13.jpg",
      subimage: "product-14.jpg",
      text: " Blink Home Security Camera System 01   ",
      price: "$720.00",
    },
  ];
  return (
    <>
      <div className="product__item white-bg d-flex mb-4">
        <ProductThumbflex item={items}></ProductThumbflex>
        <ProductContent></ProductContent>
      </div>
    </>
  );
};

export { ProductItem,ProductItemflex };
