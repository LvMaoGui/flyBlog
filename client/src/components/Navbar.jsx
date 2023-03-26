import React from 'react'
import Logo from '../imgs/logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="links">
                    <Link className='link' to={"./?cat=art"}><h6>艺术</h6></Link>
                    <Link className='link' to={"./?cat=science"}><h6>科学</h6></Link>
                    <Link className='link' to={"./?cat=cinema"}><h6>电影</h6></Link>
                    <Link className='link' to={"./?cat=technology"}><h6>科技</h6></Link>
                    <Link className='link' to={"./?cat=design"}><h6>设计</h6></Link>
                    <Link className='link' to={"./?cat=food"}><h6>美食</h6></Link>
                    <span>
                      codeFly
                    </span>
                    <span>
                      登出
                    </span>
                    <span className='write'>
                      <Link className='link' to={"/write"}>创作</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
