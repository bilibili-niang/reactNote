let value = 1;
const clicked = () => {
  value++;
};
export default function action2() {
  return (
    <div className="action2">
      <div className="ice-header">
        react基础事件绑定
      </div>
      <button onClick={clicked}>click change</button>
      value:{value}
    </div>
  );
}