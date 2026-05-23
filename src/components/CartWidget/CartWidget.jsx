import carrito from "../../assets/carrito.png"

function CartWidget() {
    return (
        <>
        <div className="flex justify-center mr-5 w-15 min-w-13">
            <a href="#" className="h-auto ">
                <img className="w-13 align-middle" src={carrito} alt="Carro de compras"/>
            </a>
        </div>
        </>
    )
}

export default CartWidget