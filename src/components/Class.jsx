// import { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>+</button>
//       </div>
//     );
//   }
// }

// export default Counter;

import { useState, useEffect } from "react";

function Toggle(props) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    console.log("Mounted");
  }, []);
  //   const handleToggle = () => {
  //     setOn((prev) => !prev);
  //     console.log("Mounted");
  //   };
  return (
    <div>
      <button onClick={() => setOn((prev) => !prev)}>
        {on ? props.name : `No name`}
      </button>
    </div>
  );
}
export default Toggle;
