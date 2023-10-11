import { Link, Outlet } from "react-router-dom"
import "./App.css"

const Layout = () => {

    return (
        <div>
            <nav>
            <ul >
                <li >
                
                    <a ><Link to="/Ejercicio-1">Ejercicio1</Link></a>
                </li>
                <li >
                
                <a ><Link to="/ejercicio-2">Ejercicio 2</Link></a>
            </li>
            <li >
                
                <a ><Link to="/ejercicio-3">Ejercicio 3</Link></a>
            </li>
                
                
               
            </ul>

            </nav>
            <Outlet />
            
        </div>


    )

}
export default Layout;