import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="left-footer">
                    <h2>TechOpus</h2>
                    <Link to="/about" id="f1">About</Link>
                    <Link to="/privacy" id="f2">Privacy Policy</Link>
                    <Link to="/terms" id="f3">Terms and Conditions</Link>
                </div>
                <div className="right-footer">
                    <Link to="/contact">Contact Us</Link>

                </div>

            </div>
        </footer>

    );
}