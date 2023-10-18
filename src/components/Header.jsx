import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex gap-2">
            <button className="btn"><Link to={"/add"}>add</Link></button>
            <button className="btn"><Link to={"/update"}>update</Link></button>
            <button className="btn"><Link to={"/users"}>user</Link></button>
            <button className="btn"><Link to={"/signin"}>signin</Link></button>
            <button className="btn"><Link to={"/signup"}>signup</Link></button>
        </div>
    );
};

export default Header;