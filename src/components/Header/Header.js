import "./Header.scss";
import logo from "../../logo.svg";

function Header() {
    return(
        <div className="container">
            <header className="header">
                    <div>
                        <h1>Flex Box Crash Course</h1>
                        <p>Note the development build.
                            To create a production build, use npm run build.
                            webpack compiled successfully</p>
                    </div>
                        <img src={logo} alt="react logo" />
            </header>
        </div>
    )
}

export default Header