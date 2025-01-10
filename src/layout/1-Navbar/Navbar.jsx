import { BiWorld } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
// import "./navbar.scss";

export default function Navbar() {
    return (
        <header>
            <nav className="">
                <div className="auth-section x-padding">
                    <div className="header-details">
                        <div className="delivery">
                            <TbTruckDelivery />
                            <span>Free Delivery</span>
                        </div>
                        <div className="Returns-Policy">
                            <BiWorld />
                            <span>Returns Policy</span>
                        </div>
                        <div className="social-media">
                            <span>Follow Us</span>
                            <IoLogoFacebook className="facebook" />
                            <IoLogoTwitter className="twitter" />
                            <IoLogoInstagram className="instagram" />
                        </div>
                    </div>
                    <div className="login-register">
                        <span>Login/Register</span>
                    </div>
                </div>
                <div className="nav-section x-padding">
                    <Logo />

                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/pages"}>pages</NavLink>{" "}
                        </li>
                        <li>
                            <NavLink to={"/shop"}>shop</NavLink>{" "}
                        </li>
                        <li>
                            <NavLink to={"/blogs"}>blogs</NavLink>{" "}
                        </li>
                        <li>
                            <NavLink to={"/gallery"}>gallery</NavLink>{" "}
                        </li>
                    </ul>
                    <div className="nav-icons">
                        <div className="liked-icon">
                            <div className="like-notify">0</div>
                            <FaRegHeart />
                        </div>
                        <div className="cart-icon">
                            <div className="cart-notify">0</div>
                            <SlHandbag />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
