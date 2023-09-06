import { UserTokenContext } from '../../Token.context'
import { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import './Style-login.css'
import axios from 'axios';

const LogIn: React.FC = () => {

    const [email, setemail] = useState('')
    const [pass, setPass] = useState('')

    const token = useContext(UserTokenContext)

    const axioslogIn = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/api/auth/login`, {
                email: email,
                password: pass
            })
            if (response.status === 200) {
                localStorage.setItem('token', response.data.responseObj.token)
                console.log(response.data)
                const newToken = response.data.responseObj.token;
                token?.setToken(newToken)
                console.log(token?.token)
            } else {
                console.log(response.data)
                console.error("login failed:", response.status);
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    }

    const hundelSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        axioslogIn()
    }


    return (
        <div className='logIn'>
            <form onSubmit={hundelSubmit}>
                <div>
                    <label className='label' htmlFor="email"></label>
                    <input className='input' type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='enter your email' id='email' />
                    <label className='label' htmlFor="password"></label>
                    <input className='input' type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='enter your password' id='password' />
                </div>
                <div>
                    <button className='formButton' type='submit'>Log In</button>
                </div>
            </form>
            <div>
                <Link to='/SignIn'>
                    <button id='register'>
                        not exist
                    </button>
                </Link>
                {token?.token ? <button id='homeButtun'><Link to='/'>back to home page</Link></button> : null}
            </div>
        </div>
    )
}

export default LogIn


