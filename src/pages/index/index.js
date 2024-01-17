const getArticle = (type) => {
  if (type === 1) {
    return <div>一类数据</div>;
  } else {
    return <div>其他数据</div>;
  }
};

export default function Index() {
  return (
    <div>
      <div className="ice-header">
        使用function来获取不同的返回
      </div>
      <br/>
      index components
      <br/>
      {getArticle(2)}
    </div>
  );
}