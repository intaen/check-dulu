import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        const cookies = new Cookies();
        cookies.remove('fortune-cookie');

        setTimeout(() => {
            navigate('/');
        }, 0)
    }

        
    return (
        <form onSubmit={handleLogout}>
            <button type='submit'>Logout</button>
        </form>
    )
}