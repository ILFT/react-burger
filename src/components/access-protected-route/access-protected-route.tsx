import { Navigate } from "react-router-dom";
import { RouteProps } from 'react-router';


function AccessProtected({ element }: any) {

    if ((localStorage.getItem('refreshToken') !== undefined) && (localStorage.getItem('refreshToken') !== '') && (localStorage.getItem('refreshToken'))) {
        return <Navigate to={'/profile'} />
    }

    return element;
}


export default AccessProtected;