import React,{useState} from 'react'
import './navBar.css'
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";


function NavBar() {

    const [className, setClassName] = useState(false)

    return (
        <div className="navBar">
            <div className="navBar-left">
                <label className="yourcart" href="#Homepage">YourCart</label>
                <input type="text" placeholder="Search"></input>
                <button type="submit"><SearchIcon/></button>
            </div>
            <div className="navBar-right">
                <div className="links" id={className ? "hidden":""}>
                    <a href="/Catagories">Catagories</a>
                    <a href="/Cart">Cart</a>
                    <a href="/Account">Notifications</a>
                    <a href="/Account">More</a>
                    <a href="/Account">Account</a>
                </div>
                    <button onClick={()=> setClassName(!className)}><ReorderIcon/></button>
            </div>
        </div>
    )
}

export default NavBar
