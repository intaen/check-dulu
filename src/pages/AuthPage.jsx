import React, {  useEffect, useState } from "react";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

export default function AuthPage() {
    const [isLoginView, setIsLoginView] = useState(true);
    const navigate = useNavigate();

    const cookies = new Cookies();
    const accessToken = cookies.get('fortune-cookie');
    useEffect(() => {
        if ((accessToken != undefined)) {
            navigate('/home')
        }
    }, [])

    return (
        <div className="auth_container">
          <Login onSwitchRegister={() => setIsLoginView(false)} />
        </div>
    );
}