"use client";
import { useEffect } from "react";
import ModalFilter from "../components/modal_filter";

export default function Home() {
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
        <h1>Product List</h1>
        <hr />
        <div className="d-flex align-items-center mb-3">
          <button
            type="button"
            className="btn btn-outline-dark btn-lg ms-2 button-filter"
            id="filterButton"
            data-bs-toggle="modal"
            data-bs-target="#filterModal"
          >
            Filter
          </button>
          <div className="input-group ms-3 custom-width">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search by Code..."
              aria-label="Search"
              aria-describedby="button-search"
            />
            <button
              className="btn btn-outline-secondary btn-lg"
              type="button"
              id="button-search"
            >
              Search
            </button>
          </div>
        </div>
        <table className="table table-hover modern-table text-secondary">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Type</th>
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
            <tr>
              <th scope="row">1010</th>
              <td>Peripherals</td>
              <td>Cougar</td>
              <td>Core</td>
              <td>Black</td>
              <td>20</td>
              <td>5</td>
              <td>40</td>
              <td>800</td>
            </tr>
            <tr>
              <th scope="row">1010</th>
              <td>Peripherals</td>
              <td>Cougar</td>
              <td>Core</td>
              <td>Black</td>
              <td>20</td>
              <td>5</td>
              <td>40</td>
              <td>800</td>
            </tr>
            <tr>
              <th scope="row">1010</th>
              <td>Peripherals</td>
              <td>Cougar</td>
              <td>Core</td>
              <td>Black</td>
              <td>20</td>
              <td>5</td>
              <td>40</td>
              <td>800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}