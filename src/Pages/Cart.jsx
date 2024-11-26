import i18n from "../components/common/components/LangConfig";
/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import CartItem from "../components/Cart/CartItem";
import WhiteButton from "../components/common/components/WhiteButton";
import RedButton from "../components/common/components/RedButton";
import ActiveLastBreadcrumb from "../components/common/components/Link";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useCart();

  // Calculate subtotal of all cart items
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-screen-lg mx-auto mt-48 flex flex-col gap-10">
      <ActiveLastBreadcrumb path="Home/Cart" />
      <div className="overflow-auto">
  <table className="w-full text-left border-collapse">
    <thead className="bg-gray-100">
      <tr>
        <th className="py-4 px-20">{i18n.t("cart.header.product")}</th>
        <th className="py-4 px-4">{i18n.t("cart.header.price")}</th>
        <th className="py-4 px-4">Flavour</th>
        <th className="py-4 px-4">{i18n.t("cart.header.quantity")}</th>
        <th className="py-4 px-4">{i18n.t("cart.header.subtotal")}</th>
        <th className="py-4 px-4">Actions</th>
      </tr>
    </thead>
    <tbody>
    {cartItems.map((item) => {
              // Retrieve product_flavours from localStorage for each item
              const flavours = JSON.parse(localStorage.getItem("product_flavours")) || {};
              const productFlavours = flavours[item.id] || []; // Get flavours for the specific product
              return <CartItem key={item.id} item={item} flavours={productFlavours} />;
            })}
    </tbody>
  </table>
</div>

      {/* Buttons for returning to shop, applying coupon, and proceeding to checkout */}
      <div className="flex justify-between items-center mt-2">
        <Link to="..">
          <WhiteButton name={i18n.t("whiteButtons.returnToShop")} />
        </Link>

        <WhiteButton name={i18n.t("whiteButtons.updateCart")} />
      </div>
      <div className="flex items-center mt-4 md:flex-row gap-8 flex-col justify-between ">
    

        <div className="flex justify-between flex-col gap-6  border py-8 px-6 md:w-[470px]">
          <p className="text-xl font-semibold">{i18n.t("cart.cartTotal")}</p>
          
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">{i18n.t("cart.total")}:</p>
            <p className="text-xl">₹{total}</p>
          </div>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">{i18n.t("cart.shipping")}:</p>
            <p className="text-xl">{i18n.t("cart.free")}</p>
          </div>{" "}
          <div className="mx-10">
            <Link to="/checkout">
              <RedButton name={i18n.t("redButtons.processToCheckout")} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
