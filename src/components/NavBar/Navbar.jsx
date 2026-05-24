import CartWidget from "../CartWidget/CartWidget.jsx";
import logo from "../../assets/tienda.png";
import "./Navbar.css";

function Navbar() {
    return (
        <>
        <header className="border-b-2">
            <nav className="flex justify-between items-center h-20">
                <div className="ml-4">
                    <a className="flex" href="./">
                        <img className="w-14" src={logo} alt="Carrito de compras" />
                        <p className="self-center">SportShop</p>
                    </a>
                </div>
                <CartWidget />
            </nav>
        </header>
        </>
    )
}

export default Navbar