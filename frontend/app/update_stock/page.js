"use client";
import { useEffect, useState } from "react";
import ModalFilter from "../../components/modal_filter";
import FilterSearch from "../../components/filter_search";


export default function UpdateStock() {
  const [products, setProducts] = useState([]); // Lista de productos
  const [stockUpdates, setStockUpdates] = useState({}); // Estado para cambios de stock

  // Función para incrementar cantidad
  const incrementQuantity = (index) => {
    setStockUpdates((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  // Función para decrementar cantidad
  const decrementQuantity = (index) => {
    setStockUpdates((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) - 1,
    }));
  };

  // Función para aplicar los cambios y resetear valores
  const handleApplyChanges = async () => {
    try {
      const updates = products
        .map((product, index) => ({
          code_product: product.code_product,
          new_stock: product.current_stock + (stockUpdates[index] || 0),
          old_stock: product.current_stock,  // 🔹 Guardamos el stock original
        }))
        .filter((update) => update.new_stock !== update.old_stock); // 🔹 Usamos update.old_stock en vez de product.current_stock
  
      if (updates.length === 0) return; // If the user didn't change any quantity, return
  
      const response = await fetch("http://127.0.0.1:5000/update_stock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updates }),
      });
  
      if (!response.ok) throw new Error("Error en la actualización");
  
      // Refrescar la lista de productos con stock actualizado
      const updatedProducts = products.map((product, index) => ({
        ...product,
        current_stock: product.current_stock + (stockUpdates[index] || 0),
      }));
  
      setProducts(updatedProducts);
      setStockUpdates({}); // Resetear valores a 0
    } catch (error) {
      console.error("Error al actualizar stock:", error);
    }
  };
  
  useEffect(() => {
    fetch("http://127.0.0.1:5000/all_products")
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <ModalFilter setProducts={setProducts} />
      <div className="flex-grow-1 p-3">
        <h1>Update Stock</h1>
        <hr />
        <FilterSearch />
          <div style={{ maxHeight: "500px", overflowY: "auto", border: "1px solid #ddd" }}>
            <table className="table table-hover modern-table text-secondary">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Category</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Model</th>
                  <th scope="col">Color</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Update Stock</th>
                  <th scope="col">Total Value</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.code_product}>
                    <th scope="row">{product.code_product}</th>
                    <td>{product.category_product}</td>
                    <td>{product.brand_product}</td>
                    <td>{product.model_product}</td>
                    <td>{product.color_product}</td>
                    <td>{product.current_stock}</td>
                    <td>
                      <div className="input-group">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          type="button"
                          onClick={() => decrementQuantity(index)}
                        >
                          <img src="dash.svg" alt="Decrement" />
                        </button>
                        <input
                          type="text"
                          style={{ width: 40, height: 30, fontSize: 20 }}
                          className="form-control text-center"
                          value={stockUpdates[index] || 0} // Mostramos el estado actualizado
                          readOnly
                        />
                        <button
                          className="btn btn-outline-success btn-sm"
                          type="button"
                          onClick={() => incrementQuantity(index)}
                        >
                          <img src="plus.svg" alt="Increment" />
                        </button>
                      </div>
                    </td>
                    <td>${(product.current_stock * parseFloat(product.price_product)).toFixed(2)}</td>
                    <td>
                      <button className="invisible-button">
                        <img className="svg-to-red" src="x-circle.svg" alt="Delete" id={product.code_product} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        <button className="btn btn-primary mt-3" type="button" onClick={handleApplyChanges}>
          Apply Changes
        </button>
    </div>
    </>
  );
}