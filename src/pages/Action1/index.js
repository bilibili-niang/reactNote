let text = "这是一个字符串";

let list = [
  {
    id: 0,
    name: "张三",
    age: 12
  }, {
    id: 1,
    name: "李四",
    age: 12
  }, {
    id: 2,
    name: "王五",
    age: 21
  }
];
let isLogin = true;
let flag = true;

export default function index(){

  return (
    <div className="App">
      <div className="ice-header">
        使用map可以遍历并返回元素,但是最好每一个遍历项有一个唯一key
      </div>

      <br/>
      this is App
      "这是一个字符串"
      <br/>
      {text}
      <br/>
      渲染的列表最好有一个id
      <br/>
      {list.map(item => <li key={item.id}>{item.name}</li>)}


      <div className="ice-header">
        逻辑控制是否显示
      </div>
      {isLogin && <div>用户已登录</div>}
      <br/>
      {flag ? <div>falg为true</div> : <div>flag为false</div>}
    </div>
  );
}