import ItemList from "./ItemList";
import catalogo from "./catalogo.js";
import imagen from "../../assets/default.webp";

function ItemListContainer() {
    return (
        <>
        <main className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-4 pt-6 px-5">
            {/* Lo de arriba en la clase me ayude de la IA para hacerlo responsivo dependiendo del espacio disponible */}
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