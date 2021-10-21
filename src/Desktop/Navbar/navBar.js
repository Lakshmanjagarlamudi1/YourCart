import React,{useState} from 'react'
import './navBar.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";


function NavBar() {

    const [className, setClassName] = useState(false)

    return (
        <div className="navBar">
            <div className="navBar-left">
                <label className="yourcart" href="#Homepage"><img style={{height:"60px"}} src="/images/YourCart.jpg"/></label>
                <input type="text" placeholder="Search"></input>
                <button className="warning" type="submit"><SearchIcon/></button>
            </div>
            <div className="navBar-right">
                <div className="links" id={className ? "hidden":""}>
                    <a href="/Account">Notifications</a>
                    <a href="/Catagories">Catagories</a>
                    <a href="/Account">More</a>
                    <a href="/Cart">Cart</a>
                    <a href="/user">User</a>
                </div>
                    <button onClick={()=> setClassName(!className)}><ReorderIcon/></button>
            </div>
        </div>
    )
}

export default NavBar
