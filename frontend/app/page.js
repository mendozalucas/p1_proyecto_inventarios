"use client";
import { useEffect, useState } from "react";
import ModalFilter from "../components/modal_filter";
import FilterSearch from "../components/filter_search";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');

    const handleMinPriceInput = () => {
      if (minPriceInput.value <= 0) {
        minPriceInput.value = '';
        minPriceInput.placeholder = 'Min Price';
      }
    };

    const handleMaxPriceInput = () => {
      if (maxPriceInput.value <= 0) {
        maxPriceInput.value = '';
        maxPriceInput.placeholder = 'Max Price';
      }
    };

    minPriceInput?.addEventListener('input', handleMinPriceInput);
    maxPriceInput?.addEventListener('input', handleMaxPriceInput);

    return () => {
      minPriceInput?.removeEventListener('input', handleMinPriceInput);
      maxPriceInput?.removeEventListener('input', handleMaxPriceInput);
    };
  }, []);

  // Initial fetch to get all products
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
        <h1>Product List</h1>
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
                <th scope="col">Stock</th>
                <th scope="col">Stock Alert</th>
                <th scope="col">Price Per Unit</th>
                <th scope="col">Total Value</th>
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
                  <td>{product.alert_stock}</td>
                  <td>${parseFloat(product.price_product).toFixed(2)}</td>
                  <td>${(product.current_stock * parseFloat(product.price_product)).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}