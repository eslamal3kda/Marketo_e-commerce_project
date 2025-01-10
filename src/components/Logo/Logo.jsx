import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className="logo">
            <h5>
                <Link to={""}>
                    <span className="logo-name">Mark</span>eto<span className="logo-name">.</span>
                </Link>
            </h5>
        </div>
    );
}
