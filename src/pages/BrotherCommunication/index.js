import {useState} from "react";

function BrotherDemo({onGetName}) {
  return (
    <div className="son">
      <div className="mainBtn" onClick={onGetName("son string")}>
        sonClick
      </div>
    </div>
  );
}

function Brother({name}) {
  return (
    <div className="brother">
      brother组件接受的数据:{name}
    </div>
  );
}

export default function BrotherCommunication() {
  const getSonName = (name) => {
    console.log(name);
    setName(name);
  };
  const [name, setName] = useState("");

  return (
    <div className="BrotherCommunication">

      <BrotherDemo onGetName={getSonName}></BrotherDemo>
      <Brother name={name}></Brother>

    </div>
  );

}