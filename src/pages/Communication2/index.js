function Son() {

  const onGetMsg = (msg) => {
    console.log("onGetMsg: " + msg);
  };

  return (
    <div className="son">
      <div className="mainBtn" onClick={() => onGetMsg("hello")}>click</div>
    </div>
  );
}

export default function Communication2() {
  const getMsg = (msg) => {
    console.log("getMsg: " + msg);
  };
  return (
    <div className="Communication2">
      <div className="ice-header">组件通信 子传父</div>
      <Son onGetMsg={{getMsg}}></Son>

    </div>
  );
}