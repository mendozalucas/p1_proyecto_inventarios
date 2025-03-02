"use client";
import { useEffect, useState } from "react";
/*import { getMensaje } from "../apicalls/apicalls";*/

export default function Home() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
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
    }
  }, []);


  /*useEffect(() => {
    const lightbulbButton = document.getElementById('lightbulbButton');
    const tipMessage = document.querySelector('.tip-message');

    const handleLightbulbButtonClick = () => {
      tipMessage.style.display = 'inline';
    };

    lightbulbButton.addEventListener('click', handleLightbulbButtonClick);

    return () => {
      lightbulbButton.removeEventListener('click', handleLightbulbButtonClick);
    };
  }, []);*/
  return (
  <>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossOrigin="anonymous"
    />
    {/* Modal */}
    <div
      className="modal fade"
      id="filterModal"
      tabIndex={-1}
      aria-labelledby="filterModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="filterModalLabel">
              Filter
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form action="#">
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <label className="d-block fs-14 text-black mb-10">
                      Brand
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ fontSize: 15 }}
                      placeholder="Enter Brand Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <label
                      className="d-block fs-14 text-black mb-10"
                      style={{ fontSize: 15 }}
                    >
                      Category
                    </label>
                    <select className="form-control" style={{ fontSize: 15 }}>
                      <option value={0}>All</option>
                      <option value={1}>Peripheral</option>
                      <option value={2}>Hardware</option>
                      <option value={3}>Monitor</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <label className="d-block fs-14 text-black mb-10">
                      Model
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ fontSize: 15 }}
                      placeholder="Enter Model Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <label className="d-block fs-14 text-black mb-10">
                      Color
                    </label>
                    <div className="row">
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Black"
                            id="colorBlack"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorBlack"
                          >
                            Black
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="White"
                            id="colorWhite"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorWhite"
                          >
                            White
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="Grey"
                            id="colorGrey"
                          />
                          <label className="form-check-label" htmlFor="colorGrey">
                            Grey
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="Red"
                            id="colorRed"
                          />
                          <label className="form-check-label" htmlFor="colorRed">
                            Red
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="Blue"
                            id="colorBlue"
                          />
                          <label className="form-check-label" htmlFor="colorBlue">
                            Blue
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="Green"
                            id="colorGreen"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorGreen"
                          >
                            Green
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="Pink"
                            id="colorPink"
                          />
                          <label className="form-check-label" htmlFor="colorPink">
                            Pink
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="Yellow"
                            id="colorYellow"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorYellow"
                          >
                            Yellow
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="Orange"
                            id="colorOrange"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorOrange"
                          >
                            Orange
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <label className="d-block fs-14 text-black mb-10">
                      Price Range
                    </label>
                    <div className="row">
                      <div className="col-6">
                        <input
                          type="number"
                          className="form-control"
                          id="minPrice"
                          style={{ fontSize: 15 }}
                          placeholder="Min Price"
                        />
                      </div>
                      <div className="col-6">
                        <input
                          type="number"
                          className="form-control"
                          id="maxPrice"
                          style={{ fontSize: 15 }}
                          placeholder="Max Price"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <label className="d-block fs-14 text-black mb-10">
                      Select Availability
                    </label>
                    <select className="form-control" style={{ fontSize: 15 }}>
                      <option value={0}>All</option>
                      <option value={1}>Instock</option>
                      <option value={2}>Out Of Stock</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <button
                    type="button"
                    className="btn style-four w-100 d-block"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-lg-6 mb-3">
                  <button type="button" className="btn style-five w-100 d-block">
                    Filter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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