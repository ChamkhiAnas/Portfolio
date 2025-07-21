import './HomeLayout.css'
import Navbar from './Navbar'
import Footer from './Footer'
import {Outlet} from "react-router"

export default function HomeLayout(){
    return(
            <div className="layout-wrapper m-0 m-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            </div>
    )
}