import { Link } from "react-router-dom";

export default function Header() {
    return (

        <header>
            <div className="header">
            <div className="left-nav">
                <Link to="/" className="logo">TechOpus</Link>
                <Link to="/">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="right-nav">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            </div>
           
        </header >


    );
}