import React from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../services/authService";

export default function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const result = await login(username, password);
        if (result.status == 200) {
            localStorage.setItem('isAuthenticated', 'true')
            navigate('/home');
        }  else {
            alert("Username/Password salah");
        }
    }

    return (
        <form className="auth_form" action="" onSubmit={handleLogin}>
            <div className="text">Check Dulu Dashboard</div>
            <input
                placeholder="Username"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="auth_input"
                required
                />
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth_input"
                required/>
            <button type='submit' className="auth_button">Login</button>
        </form>
    );
}