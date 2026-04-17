import { useSelector } from "react-redux";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App2() {
  // const [user, setUser] = useState([...users]);
  const items = useSelector((state) => state.product.items);
  const cart = useSelector((state) => state.product.items);

  return (
    <div>
      {items.map((item) => (
        <ProductList
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
        />
      ))}
      <h3>Cart</h3>
      {cart.map((item) => (
        <Cart id={item.id} key={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default App2;
