import React from 'react'

function Login() {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder='username' />
                <input type="password" placeholder='password' />
                <button>登录</button>
            </form>
        </div>
    )
}

export default Login
