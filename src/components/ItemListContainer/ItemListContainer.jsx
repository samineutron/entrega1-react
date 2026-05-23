import ItemList from "./ItemList";
import catalogo from "./catalogo.js";
import imagen from "../../assets/default.webp";

function ItemListContainer() {
    return (
        <>
        <main className="flex flex-col items-center pt-6">
            {catalogo.productos.map(c => {
                return (
                    <ItemList key={c.id} titulo={c.titulo} marca={c.marca} categoria={c.categoria} precio={c.precio} descripcion={c.descripcion} imagen={imagen} />
                )
            })
            }
        </main>
        </>
    )
}

export default ItemListContainer