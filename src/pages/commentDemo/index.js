import {useState} from "react";
import _ from "lodash";

import("./index.css");


export default function StyleDemo() {

  const list = [
    {
      id: 0,
      title: "标题一",
      content: "这里是内容",
      userId: 1,
      like: 5,
      ctime: 564
    },
    {
      id: 1,
      title: "测试标题二",
      content: "这里是内容",
      userId: 2,
      like: 12,
      ctime: 12
    },
    {
      id: 2,
      title: "测试标题三",
      content: "这里是内容",
      userId: 1,
      like: 45,
      ctime: 87
    }
  ];
  const [commentList, setCommentList] = useState(list);
  const myId = 1;
  /**
   * 删除
   */
  const handleDelete = (id) => {
    setCommentList(commentList.filter((item => item.id !== id)));
  };
  const types = [
    {
      id: 0,
      text: "最新",
      active: 0
    },
    {
      id: 1,
      text: "最热",
      active: 0
    }
  ];
  const [type, setType] = useState("最新");

  const handleTabChange = (text) => {
    setType(text);
    if (text === "hot") {
      setCommentList(_.orderBy(commentList, "like", "desc"));
    } else {
      setCommentList(_.orderBy(commentList, "ctime", "desc"));
    }
  };
  return <div className="styleDemo">
    <div className="ice-header">
      评论列表
    </div>
    <div className="type">
      {
        types.map(item => <span className={`typeItem ${type === item.text ? "active" : ""}`} key={item.id}
                                onClick={() => handleTabChange(item.text)}>
        {item.text}
          <br/>
        </span>)
      }

    </div>

    <div className="card">
      {commentList.map((item, index) => {
        return <div className="list" key={item.id}>
          <div className="ice-text">{item.title}</div>

          {myId === item.userId && <div className="delete" onClick={() => {
            handleDelete(item.id);
          }}>删除</div>}
        </div>;
      })}

    </div>

  </div>;
}
