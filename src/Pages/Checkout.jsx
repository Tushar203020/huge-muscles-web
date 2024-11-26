import i18n from "../components/common/components/LangConfig";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import CheckoutCartItem from "../components/Checkout/CheckoutCartItem";
import RedButton from "../components/common/components/RedButton";
import ActiveLastBreadcrumb from "../components/common/components/Link";

import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useCart();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      
    };

    fetchUserData();
  }, []);

  const handleSubmit = async () => {
  
    try {
      // Update user account data in Firestore
     

      // setMessage("Account details updated successfully!");
      // setOpen(true);
    } catch (error) {
      
      // setError(error.message);
      // setOpen(true);
    }
  };

  // Calculate subtotal of all cart items
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const total = subtotal; // You can calculate total including shipping, taxes, etc.

  return (
    <div className="max-w-screen-lg mx-auto mt-36 md:mt-48 flex flex-col md:gap-10">
      <ActiveLastBreadcrumb
        path={`${i18n.t("home")}/${i18n.t("redButtons.applyCoupon")}`}
      />

      <form onSubmit={handleSubmit}>
        <div className="flex items-center mt-4 md:flex-row flex-col gap-10 md:gap-40">
          <div className="flex items-center justify-between  mt-4">
            <div className="flex flex-col gap-4 md:gap-12">
              <span className="text-2xl md:text-4xl font-medium">
                {i18n.t("checkOut.billingDetails")}
              </span>

              <div className="flex flex-col gap-4 md:gap-8 w-[300px] md:w-[470px]">
              <div className="flex flex-col gap-1">
                  <span className="text-sm md:text-base text-gray-600">
                    {i18n.t("checkOut.firstName")} *
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-700 placeholder-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm md:text-base text-gray-600">
                    {i18n.t("checkOut.address")} *
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-700 placeholder-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-sm md:text-base text-gray-600">
                      {i18n.t("checkOut.email")} *
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-700 placeholder-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                  <span className="text-sm md:text-base text-gray-600">
                    {i18n.t("checkOut.apartment")}
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your Apartment"
                    required
                    className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-700 placeholder-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                <span className="text-sm md:text-base text-gray-600">
                    {i18n.t("checkOut.city")}*
                  </span>
                  <input
                    type="text"
                    placeholder=""
                    required
                    className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-700 placeholder-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                <span className="text-sm md:text-base text-gray-600">
                    {i18n.t("checkOut.phone")} *
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your Phone"
                    required
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                    className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-700 placeholder-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
                  />
                </div>
                
              </div>
            </div>
          </div>

          <div className="flex justify-between flex-col gap-4 md:gap-8  px-4 w-full md:w-[425px]">
            {cartItems.map((item, index) => (
              <CheckoutCartItem
                key={item.title}
                item={item}
                index={index}
                stars={item.stars}
                rates={item.rates}
              />
            ))}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between  border-b">
                <p className="text-base">{i18n.t("cart.subtotal")}:</p>
                <p className="text-base">₹{subtotal}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between  border-b">
                <p className="text-base">{i18n.t("cart.shipping")}:</p>
                <p className="text-base">{i18n.t("cart.free")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between  border-b">
                <p className="text-base">{i18n.t("cart.total")}:</p>
                <p className="text-base">₹{total}</p>
              </div>
            </div>
            {/* Payment methods */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="text-base">{i18n.t("checkOut.methods")}:</p>
              </div>
              <div className="flex justify-between">
                <label>
                  <input type="radio" name="paymentMethod" value="bank" />
                  {i18n.t("checkOut.bank")}
                </label>
              </div>
              <div className="flex justify-between">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                  />
                  {i18n.t("checkOut.cash")}
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 space-x-4 md:w-[510px]">
             
            </div>
            <div className="mr-auto">
              <Link to="/payment">
                <RedButton name={i18n.t("redButtons.placeOrder")} />
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;