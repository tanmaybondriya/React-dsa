import { useState, useEffect, useContext } from "react";
// import { UserContext } from "../context/UserContext";

function Card(props) {
  const [follow, setFollow] = useState(false);
  const [count, setCount] = useState(0);
  // const { removeUser } = useContext(UserContext);

  const handleFollow = () => {
    if (!follow) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setFollow((prev) => !prev);
  };

  useEffect(() => {
    console.log(`card Mounted for ${props.user.name}`);
    return () => {
      console.log(`Card unmounted for ${props.user.name}`);
      setTimeout(() => console.log("Picutre is being removed..."), 1000);
    };
  }, []);

  useEffect(() => {
    console.log(`Follow count changed:${count}`);
  }, [count]);

  return (
    <div>
      <p>{props.user.name}</p>
      <p>{props.user.role}</p>
      <img src={props.user.avatarUrl} alt={props.user.name} />
      <p>Followers:{count}</p>
      <button onClick={handleFollow}>{follow ? "Following" : "Follow"}</button>
      <button onClick={props.onRemove}>Remove</button>
    </div>
  );
}

export default Card;
