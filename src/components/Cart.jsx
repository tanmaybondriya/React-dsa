import { useDispatch } from "react-redux";
import { addToCart, removeProduct } from "../store/productSlice";

const Cart = (props) => {
  // const price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{props.name}</p>
      <p>Quantity: {props.quantity}</p>
      <p>Price: {props.price * props.quantity}</p>
      <button onClick={() => dispatch(addToCart(props))}>Add to cart</button>
      <button onClick={() => dispatch(removeProduct(props.id))}>
        Remove product
      </button>
    </div>
  );
};
export default Cart;
