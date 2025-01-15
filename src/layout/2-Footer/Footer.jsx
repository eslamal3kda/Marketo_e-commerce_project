import GallerySubList from "../../components/GallerySubList/GallerySubList";

export default function Footer() {
    return (
        <footer>
            <h1>footer</h1>
            <GallerySubList
                label={"Theme Elements"}
                title={"Pages that every website needs."}
                page1={"Accessories"}
                page2={"Camera"}
                page3={"Headphone"}
                page4={"Gamepad"}
                page5={"Laptop"}
                page6={"Mobile"}
            />
        </footer>
    );
}
