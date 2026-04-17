import Header from "./components/Header";
import TaskList from "./components/TaskList";
import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  Suspense,
  lazy,
} from "react";
// import Counter from "./components/Class";
const Card = lazy(() => import("./components/Card"));
// import { UserContext } from "./context/UserContext";
import Display from "./components/VisibleComponent";
import Input from "./components/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./store/userSlice";

function App() {
  // const [user, setUser] = useState([...users]);
  const user = useSelector((state) => state.users.list);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [url, setUrl] = useState("");
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const submitCount = useRef(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const filtered = useMemo(
    () =>
      user.filter((u) => u.name.toLowerCase().includes(search.toLowerCase())),
    [user, search],
  );
  //recomputes when userlist or search changes

  // const removeUser = useCallback((id) => {
  //   setUser((prev) => prev.filter((user) => user.id !== id));
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCount.current++; //increment on every count
    console.log("submit attempts", submitCount.current);
    if (!name || !role || !url) {
      console.error("Please enter all the details");
    } else {
      // setUser([...user, { id: Date.now(), name, role, avatarUrl: url }]);
      dispatch(addUser({ id: Date.now(), name, role, avatarUrl: url }));
      setName("");
      setRole("");
      setUrl("");
    }
  };

  return (
    // <UserContext.Provider value={{ user, removeUser }}>
    // <div>
    //   <input
    //     type="text"
    //     value={search}
    //     onChange={(e) => setSearch(e.target.value)}
    //   />

    //   <form onSubmit={handleSubmit}>
    //     <input
    //       ref={inputRef}
    //       type="text"
    //       value={name} //this makes them controlled components
    //       placeholder="enter name"
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       value={role}
    //       placeholder="Role"
    //       onChange={(e) => setRole(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       value={url}
    //       placeholder="place the url"
    //       onChange={(e) => setUrl(e.target.value)}
    //     />
    //     <button type="submit">Add User</button>
    //   </form>
    //   <Suspense fallback={<p>Loading...</p>}>
    //     {filtered.map((user) => (
    //       <Card
    //         key={user.id}
    //         user={user}
    //         onRemove={() => dispatch(removeUser(user.id))}
    //       />
    //     ))}
    //   </Suspense>
    //   <div>
    //     <h3>Shared State:{text}</h3>
    //     <Input value={text} onUpdate={setText} />
    //     <Display value={text} />
    //   </div>
    // </div>
    // </UserContext.Provider>
    <div></div>
  );
}

export default App;
