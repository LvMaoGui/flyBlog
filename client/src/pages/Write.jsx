import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="标题" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>发布</h1>
          <span>
            <b>状态: </b>草稿
          </span>
          <span>
            <b>可见性：</b>公开的
          </span>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label className="file" htmlFor="file">
            上传图片
          </label>
          <div className="buttons">
            <button>另存为草稿</button>
            <button>上传</button>
          </div>
        </div>
        <div className="item">
          <h1>类别</h1>
          <div className="cat">
            <input type="radio" name="cat" value={"艺术"} id="art" />
            <label htmlFor="art">艺术</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value={"科学"} id="science" />
            <label htmlFor="science">科学</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value={"电影"} id="cinema" />
            <label htmlFor="cinema">电影</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value={"科技"} id="technology" />
            <label htmlFor="technology">科技</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value={"设计"} id="design" />
            <label htmlFor="design">设计</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value={"美食"} id="food" />
            <label htmlFor="food">美食</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
