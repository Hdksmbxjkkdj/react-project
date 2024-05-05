import { Config } from "../../Utils/config";
const Cart = () => {
  const row = [
    {
      pic: "product-2.jpg",
      name: "Bakix Furniture",
      unitprice: 130.00,
      quantity: 1,
    },
    {
      pic: "product-4.jpg",
      name: "Sujon Chair Set",
      unitprice: 120.50,
      quantity: 1,
    },
  ];
  function total()
  {
    var tot=0;
    for(var i=0;i<row.length;i++)
    {
        tot+=(row[i].quantity * row[i].unitprice);
        console.log(tot);
    }
    var totally = Math.round(tot)-1;
    return totally.toFixed(2);
  }
  return (
    <>
      <section class="cart-area pt-100 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <form action="#">
                <div class="table-content table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="product-thumbnail">Images</th>
                        <th class="cart-product-name">Product</th>
                        <th class="product-price">Unit Price</th>
                        <th class="product-quantity">Quantity</th>
                        <th class="product-subtotal">Total</th>
                        <th class="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {row.map((items) => {
                        return (
                          <>
                            <tr>
                              <td class="product-thumbnail">
                                <a href="product-details.html">
                                  <img
                                    src={Config.shop + "" +items.pic}
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td class="product-name">
                                <a href="product-details.html" style={{fontWeight:"600"}}>{items.name}</a>
                              </td>
                              <td class="product-price">
                                <span class="amount" style={{fontWeight:"600"}}>{(items.unitprice).toFixed(2)}</span>
                              </td>
                              <td class="product-quantity">
                                <div class="cart-plus-minus">
                                  <input type="text" value={items.quantity} />
                                </div>
                              </td>
                              <td class="product-subtotal">
                                <span class="amount" style={{fontWeight:"600"}}>{(items.unitprice*items.quantity).toFixed(2)}</span>
                              </td>
                              <td class="product-remove">
                                <a href="#">
                                  <i class="fa fa-times"></i>
                                </a>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="coupon-all">
                      <div class="coupon">
                        <input
                          id="coupon_code"
                          class="input-text"
                          name="coupon_code"
                          value=""
                          placeholder="Coupon code"
                          type="text"
                        />
                        <button
                          class="t-y-btn t-y-btn-border"
                          name="apply_coupon"
                          type="submit"
                        >
                          Apply coupon
                        </button>
                      </div>
                      <div class="coupon2">
                        <button
                          class="t-y-btn t-y-btn-border"
                          name="update_cart"
                          type="submit"
                        >
                          Update cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-5 ml-auto">
                    <div class="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul class="mb-20">
                        <li>
                          Subtotal <span>{total()}</span>
                        </li>
                        <li>
                          Total <span>{total()}</span>
                        </li>
                      </ul>
                      <a class="t-y-btn" href="checkout.html">
                        Proceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export { Cart };
