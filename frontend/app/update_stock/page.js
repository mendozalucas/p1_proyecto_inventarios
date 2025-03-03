"use client";
import { useEffect, useState } from "react";
import ModalFilter from "../../components/modal_filter";
import FilterSearch from "../../components/filter_search";


export default function UpdateStock() {
  const [quantities, setQuantities] = useState([0, 0, 0]); // Assuming you have 3 rows

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

  const incrementQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const decrementQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 0) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });
  };

  const resetQuantities = () => {
    setQuantities([0, 0, 0]); // Reset all quantities to 0
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <ModalFilter />
      <div className="flex-grow-1 p-3">
        <h1>Update Stock</h1>
        <hr />
        <FilterSearch />
        <table className="table table-hover modern-table text-secondary">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Type</th>
              <th scope="col">Brand</th>
              <th scope="col">Model</th>
              <th scope="col">Color</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
              <th scope="col">Total Value</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {quantities.map((quantity, index) => (
              <tr key={index}>
                <th scope="row">1010</th>
                <td>Peripherals</td>
                <td>Cougar</td>
                <td>Core</td>
                <td>Black</td>
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
                      value={quantity}
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
                <td>
                  <select className="form-select" style={{ height: 32, fontSize: 15 }}>
                    <option value="Add">Add</option>
                    <option value="Subtract">Subtract</option>
                  </select>
                </td>
                <td>800</td>
                <td>
                  <button className="invisible-button">
                    <img className="svg-to-red" src="x-circle.svg" alt="Delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={9} className="text-center">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={resetQuantities}
                >
                  Apply Changes
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}