import {useState} from "react";
import classNames from "classnames";

import("./index.css");
export default function ChangeClassName() {
  const [item, setItem] = useState({
    type: "squire"
  });
  const type = "round";

  const changeType = () => {
    console.log(item.type);
    if (item.type !== "round") {
      setItem({
        type: "round"
      });
    } else {
      setItem({
        type: "squire"
      });
    }
  };

  return <div className="changeClassName">
    <div className="ice-header">
      classname优化类名控制
    </div>
    下面代码的问题:
    字符串拼接方式不够直观,也容易出错
    <div className={`block ${type === item.type && "active"}`}></div>

    <div className="mainBtn" onClick={changeType}>
      change
    </div>
    <div className="ice-text">
      优化之后
    </div>

    <div className={classNames("block", {active: type === item.type})}></div>
    <div className="mainBtn" onClick={changeType}>
      change
    </div>

  </div>;
}
