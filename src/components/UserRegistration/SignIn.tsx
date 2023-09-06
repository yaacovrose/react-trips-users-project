import { useState } from "react"
import { Link } from "react-router-dom";
import axios from 'axios'



export default function SignIn ():JSX.Element {

    const [newUser, setNewUser] = useState({
        email: '',
        pass: '',
        role: ''
    })

    const [token, setToken] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
    };

    const axiosSignIn = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/api/auth/login`, {
                email: newUser.email,
                password: newUser.pass,
                role: newUser.role
            })
            if (response.status === 200) {
                console.log(response.data)
                setToken(response.data.responseObj.token)
                console.log(token)
            } else {
                console.log(response.data)
                console.error("register failed:", response.status);
            }
        } catch (error) {
            console.error("error register:", error);
        }
    }


    const hundelSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        axiosSignIn()
    }

    return (
        <div>
            <form onSubmit={hundelSubmit}>
            <label htmlFor="email"></label>
            <input type="email" value={newUser.email} onChange={handleInputChange} placeholder='enter your email' id='email'/>
            <label htmlFor="password"></label>
            <input type="password" value={newUser.pass} onChange={handleInputChange} placeholder='enter your password' id='password'/>
            <label htmlFor="role"></label>
            <input type="text" value={newUser.role} onChange={handleInputChange} placeholder='enter your role' id='role'/>
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