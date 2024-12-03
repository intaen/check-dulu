import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

export const ProtectedRoute = ({ children }) => {
    const cookies = new Cookies();
    const accessToken = cookies.get('fortune-cookie');
    // cookies.remove('fortune-cookie');

    if ((accessToken == undefined)) {
        return <Navigate to="/" />
    }
 
    return (
        <div>
                {children}
        </div>
    )   
}