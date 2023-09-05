// import axios from 'axios'
import { useState } from 'react'
import { Link } from "react-router-dom";
import './Style-login.css'

export default function LogIn(): JSX.Element {

    const [email, setemail] = useState('')
    const [pass, setPass] = useState('')
    // const res = await axios.post('https://httpbin.org/post', { answer: 42 })

    const hundelSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
    }
    

    return (
        <div className='logIn'>
            <form onSubmit={hundelSubmit}>
            <label htmlFor="email"></label>
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='enter your email' id='email'/>
            <label htmlFor="password"></label>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='enter your password' id='password'/>
            <button type='submit'>Log In</button>
            </form>
            <Link to='/SignIn'>
            <button>
                not exist
            </button>
            </Link>
        </div>
    )
}