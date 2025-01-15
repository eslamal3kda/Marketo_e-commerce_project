import { Link } from "react-router-dom";

export default function GallerySubList({ label,title, page1, page2, page3, page4, page5, page6 }) {
    return (
        <>
            <ul className="gallery-sub-list">
                <h6>{label}</h6>
                <span>{title}</span>
                <li>
                    <Link to={page1}>{page1}</Link>
                </li>
                <li>
                    <Link to={page2}>{page2}</Link>
                </li>
                <li>
                    <Link to={page3}>{page3}</Link>
                </li>
                <li>
                    <Link to={page4}>{page4}</Link>
                </li>
                <li>
                    <Link to={page5}>{page5}</Link>
                </li>
                <li>
                    <Link to={page6}>{page6}</Link>
                </li>
            </ul>
        </>
    );
}
