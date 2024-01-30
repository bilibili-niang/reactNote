import {useState} from "react";

import("./index.css");


export default function StyleDemo() {

  const list = [
    {
      id: 0,
      title: "测试标题",
      content: "这里是内容"
    },
    {
      id: 1,
      title: "测试标题",
      content: "这里是内容"
    },
    {
      id: 2,
      title: "测试标题",
      content: "这里是内容"
    }
  ];
  const [commentList, setCommentList] = useState(list);

  const deleteItem = () => {

  };

  return <div className="styleDemo">
    <div className="ice-header">
      评论列表
    </div>
    <div className="card">

      {commentList.map((item, index) => {
        return <div className="list" key={item.id}>
          <div className="ice-text">{item.title}</div>
          <div className="delete" onClick={deleteItem}>删除</div>
        </div>;
      })}


    </div>


  </div>;
}