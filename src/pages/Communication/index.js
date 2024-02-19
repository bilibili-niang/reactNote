export default function Communication(props) {
  console.log("props:");
  console.log(props);
  const str=props
  return <div className="Communication">
    <div className="ice-header">父子之间的通信,父传子</div>
    {props.name}
    <hr/>
    props可以传递任意的数据:1.数字,字符串,布尔值,数组,对象,函数,jsx
    2.props是只读对象,子组件只能读取props中的数据,不能直接进行修改,父组件的数据只能由父组件修改
<hr/>
    父传子,特殊的prop children
    场景:当我们把内容嵌套在子组建标签中时,父组件会自动在名为children的prop属性中接受该内容


  </div>;
}