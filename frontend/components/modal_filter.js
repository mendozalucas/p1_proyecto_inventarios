"use client";
import { useEffect } from "react";

export default function ModalFilter() {
  useEffect(() => {
    // Dynamically import the Bootstrap JavaScript
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded');
      })
      .catch(err => {
        console.error('Failed to load Bootstrap JS', err);
      });
  }, []);

  return (
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
            <h5 className="modal-title" id="filterModalLabel" style={{ Height: 40 }}>
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
  );
}