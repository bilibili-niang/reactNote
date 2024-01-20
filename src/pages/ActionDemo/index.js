import {useState} from "react";

export default function ActionDemo() {

  let value = 1;
  const clicked = (e) => {
    console.log(e);
  };
  const clickHandler = (str) => {
    console.log(str);
  };
  const getDemoValue = (value, e) => {
    console.log(value, e);
  };
  const [demoFrom, setDemoFrom] = useState({
    name: "jack"
  });
  const handleChange = () => {
    // 直接修改原对象,不引发视图变化
    // demoFrom.name='jackChen';
    // 调用set传入新对象用于修改
    setDemoFrom({
      ...demoFrom,
      name: "jackChen"
    });

  };

  return <div className="action2">
    <div className="ice-header">
      react基础事件绑定
    </div>
    <button onClick={clicked}>click change</button>
    value:{value}
    <br/>
    <div className="card">
      注意这里不能直接写函数调用,这里事件需要绑定一个函数引用
      使用自定义传递数据:
      <div className="mainBtn" onClick={() => clickHandler("demoStr")}>
        click
      </div>
    </div>
    <div className="card">
      想要传入自定义信息并且获取e
      <div className="mainBtn" onClick={(e) => getDemoValue("valueStr", e)}>
        click
      </div>
    </div>

    <h5>
      修改对象状态
    </h5>
    规则:对于对象类型的状态变量,应该始终传给set方法一个全新的对象来进行修改
    <br/>
    当前demoFrom:
    {demoFrom.name}
    <br/>
    <div className="mainBtn" onClick={handleChange}>change</div>

  </div>;
}