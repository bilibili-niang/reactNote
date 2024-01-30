const style = {
  color: "red",
  fontSize: "20px",
  fontWeight: "bold",
  lineHeight: "30px",
  textAlign: "center",
  background: "rgba(0,0,0,0.1)",
  padding: "10px",
  borderRadius: "5px",
};

export default function StyleDemo() {
  return <div className="styleDemo">
    <div className="textStyle" style={style}>
      这里是行内动态修改样式
    </div>
  </div>;
}