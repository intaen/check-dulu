import React, {  useEffect, useState } from "react";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const [isLoginView, setIsLoginView] = useState(true);
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home')
        }
    }, [isAuthenticated])

    return (
        <div className="auth_container">
          <Login onSwitchRegister={() => setIsLoginView(false)} />
        </div>
    );
}