import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import PROFILE from '../Assets/profile.PNG'


function NavBar() {
    return (
        <nav className="desktop-nav">
            <ul className={"menus"}>
                <Navbar className={"Nav_Bar"}>

                    <div className={"Logo_Link"}>
                        <img src={PROFILE} alt={"profile"} className={"logo"}/>
                    </div>

                    <div className={"Home_Link"}>
                        <Link className={"home"} to={"/"}> Home </Link>
                    </div>

                    <div className={"Port_Link"}>
                        <Link className={"portfolio"} to={"/port"}> Portfolio </Link>
                    </div>

                    <div className={"Contact_Link"}>
                        <Link className={"contact"} to={"/contact"}> Contact </Link>
                    </div>

                </Navbar>
            </ul>
        </nav>
    );
};

export default NavBar;