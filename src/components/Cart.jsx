import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeProduct } from "../store/productSlice";

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);
  const items = useSelector((state) => state.product.items);
  const dispatch = useDispatch();

  return (<div>{items.map((item)=>
        
)}</div>);
};
