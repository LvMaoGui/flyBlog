import React from "react";
import Edit from "../imgs/Edit.png";
import Delete from "../imgs/Delete.png"
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>codeFly</span>
            <p>两天前发布</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <div className="editBtn">
                <img src={Edit} alt="" />
              </div>
            </Link>

            <Link to={`/write?delete=2`}>
              <div className="delBtn">
              <img src={Delete} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <h1>标题标题</h1>
        <p>
          文章内容....................................文章内容....................................文章内容....................................文章内容....................................文章内容....................................文章内容....................................
          <br />
          文章内容....................................文章内容....................................文章内容....................................文章内容....................................文章内容....................................文章内容....................................
        </p>

      </div>

      <Menu />
    </div>
  );
}

export default Single;
