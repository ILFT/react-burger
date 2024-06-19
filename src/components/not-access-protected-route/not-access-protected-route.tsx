
import { Navigate, RouteProps } from "react-router-dom";



function NotAccessProtected({ element }: { element: JSX.Element }): JSX.Element {

    if ((localStorage.getItem('refreshToken') === undefined) || (localStorage.getItem('refreshToken') === '') || !(localStorage.getItem('refreshToken'))) {
        return <Navigate to={'/login'} />
    }

    return element;
}


export default NotAccessProtected;