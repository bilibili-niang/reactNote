import {useState} from "react";

export default function FormBind() {
  const [value, setValue] = useState();

  return <div className="FormBind">
    <div className="ice-header">
      受控表单的双向绑定
    </div>
    <input type="text" className={'ice-input'} value={value} onChange={(e) => setValue(e.target.value)
    }/>
    {value}

  </div>;
}