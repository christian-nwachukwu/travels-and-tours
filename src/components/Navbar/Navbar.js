import "./Navbar.scss";
import logo from "../../logo.svg";

function Navbar() {
    return(
        <div className="container">
            <nav class="navbar">
                <img src={logo} alt="logo"/>
                    <ul class="nav">
                        <li><a href="/" className="nav-link">Home</a></li>
                        <li><a href="/" className="nav-link">About</a></li>
                        <li><a href="/" className="nav-link">Tours</a></li>
                        <li><a href="/" className="nav-link">Faq</a></li>
                        <li><a href="/" className="nav-link">Contact</a></li>
                    </ul>
            </nav>
        </div>
    )
}

export default Navbar