import {useState} from "react";

function Son({onGetMsg}) {
  return (
    <div className="son">
      这里是子组件点击，触发了onGetMsg,
      <div className="mainBtn" onClick={() => onGetMsg("hello")}>click</div>
    </div>
  );
}

export default function Communication2() {
  const getMsg = (value) => {
    console.log("getMsg: " + value);
    setMsg(value);
  };
  const [msg, setMsg] = useState("");
  return (
    <div className="Communication2">
      <div className="ice-header">组件通信 子传父</div>
      子组件触发 onGetMsg 父组件中触发 getMsg 函数
      <hr/>
      <Son onGetMsg={getMsg}></Son>
      <hr/>
      msg:{msg}
    </div>
  );
}