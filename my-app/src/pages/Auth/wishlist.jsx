import { Config } from "../../Utils/config";
const WishList = () => {
  const row = [
    {
      pic: "product-2.jpg",
      name: "Bakix Furniture",
      unitprice: 130.0,
      quantity: 1,
    },
    {
      pic: "product-4.jpg",
      name: "Sujon Chair Set",
      unitprice: 120.5,
      quantity: 1,
    },
  ];
  function total() {
    var tot = 0;
    for (var i = 0; i < row.length; i++) {
      tot += row[i].quantity * row[i].unitprice;
      console.log(tot);
    }
    var totally = Math.round(tot) - 1;
    return totally.toFixed(2);
  }
  return (
    <>
      <main>
        <section class="cart-area pb-100">
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
                                      src={Config.shop + "" + items.pic}
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a
                                    href="product-details.html"
                                    style={{ fontWeight: "600" }}
                                  >
                                    {items.name}
                                  </a>
                                </td>
                                <td class="product-price">
                                  <span
                                    class="amount"
                                    style={{ fontWeight: "600" }}
                                  >
                                    {items.unitprice.toFixed(2)}
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="cart-plus-minus">
                                  <button class="t-y-btn t-y-btn-grey fw-bold"type="submit">Add TO Cart</button>
                                  </div>
                                </td>
                                <td class="product-subtotal">
                                  <span
                                    class="amount"
                                    style={{ fontWeight: "600" }}
                                  >
                                    {(items.unitprice * items.quantity).toFixed(
                                      2
                                    )}
                                  </span>
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
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export { WishList };
