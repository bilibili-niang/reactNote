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
export default function action2() {
  return (
    <div className="action2">
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

    </div>
  );
}