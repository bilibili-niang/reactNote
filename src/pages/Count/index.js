import {useState} from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const clicked = () => {
    setCount(count + 1);
  };

  return <div className="Count">
    <div className="card">
      count:{count}
      <div className="mainBtn" onClick={clicked}>
        click
      </div>
    </div>
  </div>;
}