"use client";
import { useEffect, useState } from "react";
import ModalFilter from "../../components/modal_filter";
import FilterSearch from "../../components/filter_search";
import Contact from "../../components/contact";

export default function UpdateStock() {
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

  // Delete product by code
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorDeleting, setErrorDeleting] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const handleDelete = async (e) => {
    if (isDeleting) {
      setErrorDeleting(true);
      return
    };
    
    setIsDeleting(true);
    setErrorDeleting(false);
    let timeLeft = 5;
    setRemainingTime(timeLeft);

    const code = e.currentTarget.getAttribute("data-code");

    if (!code) {
        console.error("Error: No code found for deletion");
        setIsDeleting(false);
        return;
    }

    console.log("Deleting:", code);
    
    try {
        const response = await fetch("http://127.0.0.1:5000/delete_item", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code }),
        });

        if (!response.ok) throw new Error("Error trying to delete the product");

        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.code_product !== parseInt(code))
        );

        console.log("Product deleted successfully!");
    } catch (error) {
        console.error("Error trying to delete the product:", error);
    }

    // Temporizador para actualizar el tiempo restante
    const timer = setInterval(() => {
      timeLeft -= 1;
      setRemainingTime(timeLeft);
      if (timeLeft <= 0) {
          clearInterval(timer);
          setIsDeleting(false);
          setErrorDeleting(false);
      }
    }, 1000);
  };

  const [products, setProducts] = useState([]); // Lista de productos
  const [stockUpdates, setStockUpdates] = useState({}); // Estado para cambios de stock
  // Función para aplicar los cambios y resetear valores
  const handleApplyChanges = async () => {
    try {
      const updates = products.map((product) => ({
          code_product: product.code_product,
          new_stock: product.current_stock + (stockUpdates[product.code_product] || 0),
          old_stock: product.current_stock,  // 🔹 Guardamos el stock original
        }))
        .filter((update) => update.new_stock !== update.old_stock); // 🔹 Usamos update.old_stock en vez de product.current_stock
  
      console.log("Updating stock:", updates);
      if (updates.length === 0) return; // If the user didn't change any quantity, return

      const response = await fetch("http://127.0.0.1:5000/update_stock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updates }),
      });
  
      if (!response.ok) throw new Error("Error en la actualización");
  
      // Refrescar la lista de productos con stock actualizado
      const updatedProducts = products.map((product) => ({
        ...product,
        current_stock: product.current_stock + (stockUpdates[product.code_product] || 0),
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

  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]); // if the products change, update the filtered products
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
        <div className="d-flex align-items-center justify-content-between">
          <h1>Update Stock</h1>
          <Contact />
        </div>
        <hr />
        <FilterSearch products={products} setFilteredProducts={setFilteredProducts} />
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
                {filteredProducts.map((product) => (
                  <tr key={product.code_product}>
                    <th scope="row">{product.code_product}</th>
                    <td>{product.category_product}</td>
                    <td>{product.brand_product}</td>
                    <td>{product.model_product}</td>
                    <td>{product.color_product}</td>
                    <td>{product.current_stock}</td>
                    <td>
                      <div className="input-group" style={{ width: 125 }}>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          type="button"
                          onClick={() => decrementQuantity(product.code_product)}
                        >
                          <img src="dash.svg" alt="Decrement" />
                        </button>
                        <input
                          type="text"
                          style={{ width: 40, height: 30, fontSize: 20 }}
                          className="form-control text-center"
                          value={stockUpdates[product.code_product] || 0} // Mostramos el estado actualizado
                          readOnly
                        />
                        <button
                          className="btn btn-outline-success btn-sm"
                          type="button"
                          onClick={() => incrementQuantity(product.code_product)}
                        >
                          <img src="plus.svg" alt="Increment" />
                        </button>
                      </div>
                    </td>
                    <td>${(product.current_stock * parseFloat(product.price_product)).toFixed(2)}</td>
                    <td>
                    <button className="invisible-button" onClick={handleDelete} data-code={product.code_product}>
                        <img className="svg-to-red" src="x-circle.svg" alt="Delete" />
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        <button className="btn btn-primary mt-3" type="button" onClick={handleApplyChanges} disabled={Object.keys(stockUpdates).length === 0}> {/*Desable button if there are no changes*/}
          Apply Changes
        </button>
        {errorDeleting && (
          <div className="alert alert-danger mt-3 slide-in" role="alert" style={{ height: 70}}>
              <img src="cross-circle-svgrepo-com.svg" alt="Error" className="me-2" />
              Wait {remainingTime} seconds before trying again.
          </div>
        )}
    </div>
    </>
  );
}