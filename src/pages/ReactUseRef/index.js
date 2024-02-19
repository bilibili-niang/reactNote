import {useRef} from "react";

export default function ReactUseRef() {
  // 生成ref对象
  const inputRef = useRef(null);
  const getRef = () => {
    console.log(inputRef.current);
    console.log(inputRef);
    console.log(inputRef.current.value);
  };

  return <div className="ReactUseRef">
    <div className="ice-header">
      react中操作dom
    </div>
    <div className="ice-text">
      在react中获取/操作Dom,需要使用useRef钩子函数,分为两部
    </div>
    在dom元素中指定ref
    <input type="text" ref={inputRef}/>
    <div className="mainBtn" onClick={getRef}>
      输出dom
    </div>

  </div>;
}