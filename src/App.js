// 项目的根组件
// App -> index.js ->public/index.html(root)

let text = "这是一个字符串";

let returnStr = (name) => {
  return "名字是:" + name;
};
let list = [
  {
    name: "张三",
    age: 12
  }, {
    name: "李四",
    age: 12
  }, {
    name: "王五",
    age: 21
  }
];

function App() {
  return (
    <div className="App">
      this is App
      "这是一个字符串"
      <br/>
      {text}
      <br/>
      {returnStr("张三")}
      <br/>
      {list.map(item => <li>{item.name}</li>)}
    </div>
  );
}

export default App;
