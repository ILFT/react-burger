import { Navigate } from "react-router-dom";


function NotAccessProtected({ element }: any) {

    if ((localStorage.getItem('refreshToken') === undefined) || (localStorage.getItem('refreshToken') === '') || !(localStorage.getItem('refreshToken'))) {
        return <Navigate to={'/login'} />
    }

    return element;
}


export default NotAccessProtected;