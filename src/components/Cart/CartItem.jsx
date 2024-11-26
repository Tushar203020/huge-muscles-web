/* eslint-disable react/prop-types */

import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const RemoveIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" fill="#DB4444" />
    <path
      d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CartItem = ({ item }) => {
  const { removeFromCart, handleIncrease, handleDecrease } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);
  const [flavors, setFlavors] = useState([]);
  const [selectedFlavor, setSelectedFlavor] = useState(item.flavor || "");

  useEffect(() => {
    setQuantity(item.quantity);
  
  // Find product matching the current cart item's ID
  // const product = storedProducts.find((product) => product.id === item.id);
  
  // If product is found, set the flavors; otherwise, set an empty array
  setFlavors(item?.flavour || []);
  }, [item.id, item.quantity]);

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleFlavorChange = (event) => {
    setSelectedFlavor(event.target.value);
    // Optionally update the flavor in cart or backend
  };

  

  const handleDecreaseFunc = () => {
    handleDecrease(item);
  };

  const handleIncreaseFunc = () => {
    handleIncrease(item);
  };

  return (
    <tr className="border-b">
      <td className="py-4 px-2 flex items-center gap-4">
        <IconButton onClick={() => removeFromCart(item.id)}>
          <RemoveIcon />
        </IconButton>
        <Link to={`/allProducts/${item.id}`}>
          <img
            loading="lazy"
            src={item.imageSrc}
            alt={item.title}
            className="w-16 h-16 object-contain"
          />
        </Link>
        {/* Adjusting for text overflow with responsive handling */}
        <span className="text-sm truncate md:whitespace-normal md:w-auto w-[120px]">{item.title}</span>
      </td>
      <td className="py-4 px-4">${item.price}</td>
      <td className="py-4 px-4">
  <select
    value={selectedFlavor}
    onChange={handleFlavorChange}
    className="border px-2 py-1 rounded"
  >
    <option value="" disabled>
      Select Flavor
    </option>
    {flavors.map((flavor, index) => (
      <option key={index} value={flavor}>
        {flavor}
      </option>
    ))}
  </select>
</td>

      <td className="py-4 px-4 flex items-center gap-2">
        <button
          className="px-2 py-1 border rounded hover:bg-gray-200"
          onClick={() => handleDecrease(item)}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          className="px-2 py-1 border rounded hover:bg-gray-200"
          onClick={() => handleIncrease(item)}
        >
          +
        </button>
      </td>
      <td className="py-4 px-4">₹{item.price * item.quantity}</td>
      <td className="py-4 px-4">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:underline"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};


export default CartItem;
