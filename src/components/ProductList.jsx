import { useDispatch } from "react-redux";
import { addToCart } from "../store/productSlice";

const ProductList = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <button
        onClick={() =>
          dispatch(
            addToCart({ id: props.id, name: props.name, price: props.price }),
          )
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductList;
