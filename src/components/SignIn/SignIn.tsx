import { useState } from "react"
import { Link } from "react-router-dom";
import axios from 'axios'
import LogIn from "../LogIn/Login";


export default function SignIn ():JSX.Element {

    const [email, setemail] = useState('')
    const [pass, setPass] = useState('')

    // const res = await axios.post('https://httpbin.org/post', { answer: 42 })

    const hundelSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={hundelSubmit}>
            <label htmlFor="email"></label>
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='enter your email' id='email'/>
            <label htmlFor="password"></label>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='enter your password' id='password'/>
            <button type='submit'>Sign In</button>
            </form>
            <Link to='/LogIn'>
            <button>
                exist
            </button>
            </Link>
        </div>
    )
}