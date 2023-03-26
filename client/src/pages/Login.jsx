import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className='auth'>
            <h1>登录</h1>
            <form action="">
                <input type="text" placeholder='用户名' />
                <input type="password" placeholder='密码' />
                <button>登录</button>
                <p>这是一个错误信息！</p>
                <span>没有账户? <Link to="/register">立即注册</Link></span>
            </form>
        </div>
    )
}

export default Login
