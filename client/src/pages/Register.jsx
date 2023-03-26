import React from 'react'
import {Link} from 'react-router-dom'

function Register() {
    return (
        <div className='auth'>
            <h1>注册</h1>
            <form action="">
                <input required type="text" placeholder='用户名' />
                <input required type="email" placeholder='邮箱' />
                <input required type="password" placeholder='密码' />
                <button>注册</button>
                <p>这是一个错误信息！</p>
                <span>已有账户? <Link to="/login">立即登录</Link></span>
            </form>
        </div>
    )
}

export default Register
