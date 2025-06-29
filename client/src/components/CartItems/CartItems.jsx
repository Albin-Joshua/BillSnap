import "./CartItems.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";

const CartItems = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(AppContext);
  return (
    <div className="p-1 h-70 overflow-y-auto">
      {cartItems.length === 0 ? (
        <p className="mt-5 text-light">Your cart is empty.</p>
      ) : (
        <div className="cart-items-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item mb-1 p-1 bg-dark rounded">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="mb-0 text-light">{item.name}</h6>
                <p className="mb-0 text-light">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="d-flex justify-content-between align-item-center">
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-danger btn-sm px-1 py-1"
                    style={{ fontSize: "0.80rem", lineHeight: "1" }}
                    onClick={() =>
                      updateQuantity(item.itemId, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                  <span className="text-light">{item.quantity}</span>
                  <button
                    className="btn btn-primary btn-sm px-1 py-1"
                    style={{ fontSize: "0.80rem", lineHeight: "1" }}
                    onClick={() =>
                      updateQuantity(item.itemId, item.quantity + 1)
                    }
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>

                <button
                  className="btn btn-danger btn-sm px-1 py-1"
                  style={{
                    fontSize: "0.80rem",
                    lineHeight: "1",
                    width: "auto",
                  }}
                  onClick={() => removeFromCart(item.itemId)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItems;
