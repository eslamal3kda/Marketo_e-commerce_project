import { BiWorld } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { IoIosArrowDown } from "react-icons/io";
import GallerySubList from "../../components/GallerySubList/GallerySubList";
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
                        <li><NavLink to={"/"}>Home <IoIosArrowDown /></NavLink></li>
                        <li className="nav_lists">
                            <NavLink to={"/pages"}>pages <IoIosArrowDown /></NavLink>
                            <ul>
                                <li><Link to={"about-us"}>About Us</Link></li>
                                <li><Link to={"contact"}>Contact</Link></li>
                                <li><Link to={"fqa"}>FQA</Link></li>
                                <li><Link to={"terms-and-conditions"}>Terms and Conditions</Link></li>
                                <li><Link to={"products"}>Products</Link></li>
                            </ul>
                        </li>
                        <li className="nav_lists">
                            <NavLink to={"/shop"}>shop <IoIosArrowDown /></NavLink>
                            <ul>
                                <li><Link to={"shop"}>Shop</Link></li>
                                <li><Link to={"wishlist"}>Wishlist</Link></li>
                                <li><Link to={"track-order"}>Track Order</Link></li>
                            </ul>
                        </li>
                        <li className="nav_lists">
                            <NavLink to={"/blogs"}>blogs <IoIosArrowDown /></NavLink>
                            <ul>
                                <li><Link to={"blogs"}>Blogs</Link></li>
                                <li><Link to={"single-blog"}>Single Blog</Link></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={"/gallery"}>gallery <IoIosArrowDown /></NavLink>
                            <ul className="gallery_list">
                                <li>
                                    <GallerySubList label={"Theme Elements"} title={"Pages that every website needs."} page1={"Accessories"} page2={"Camera"} page3={"Headphone"} page4={"Gamepad"} page5={"Laptop"} page6={"Mobile"} />
                                </li>
                                <li>
                                    <GallerySubList label={"Theme Elements"} title={"Pages that every website needs."} page1={"Shop"} page2={"Product Details"} page3={"Wishlist"} page4={"Product Category"} page5={"Blog"} page6={"Blog Single"} />
                                </li>
                                <li>
                                    <GallerySubList label={"Theme Elements"} title={"Pages that every website needs."} page1={"Product Category V2"} page2={"Contact"} page3={"Terms and Conditions"} page4={"FAQ"} page5={"About Us"} page6={"My Account"} />
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="nav-icons">
                        <NavLink to={"wishlist"}>
                            <div className="liked-icon">
                                <div className="like-notify">0</div>
                                <FaRegHeart />
                            </div>
                        </NavLink>
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
