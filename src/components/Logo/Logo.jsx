import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className="logo">
            <h4>
                <Link to={""}>
                    <div className="anime-logo"><span className="logo-name">Mark</span></div>eto<span className="logo-name">.</span>
                </Link>
            </h4>
        </div>
    );
}
