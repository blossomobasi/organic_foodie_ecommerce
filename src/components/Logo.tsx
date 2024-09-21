import { Link } from "react-router-dom";
import OrganicLogo from "../assets/images/organic_foodie_logo.png";

const Logo = () => {
    return (
        <div className="w-fit" onClick={() => window.scrollTo(0, 0)}>
            <Link to="/">
                <img src={OrganicLogo} alt="Organic Foodie Logo" className="sm:w-fit w-14" />
            </Link>
        </div>
    );
};

export default Logo;
