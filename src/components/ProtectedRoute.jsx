import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated){
        return <Navigate to="/" />
    }
 
    return (
        <div>
                {children}
        </div>
    )   
}