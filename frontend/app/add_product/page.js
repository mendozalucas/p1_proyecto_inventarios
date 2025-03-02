"use client";
import { useEffect, useState } from "react";
/*import { getMensaje } from "../apicalls/apicalls";*/

export default function AddProduct() {
  return (
    <>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossOrigin="anonymous"
        />
        <div className="container mt-5">
            <form action="#">
                <div className="row g-3" style={{ marginTop: 30 }}>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label className="d-block fs-14 text-black mb-2">Code</label>
                        <input
                            type="text"
                            className="form-control"
                            style={{ fontSize: 15 }}
                            placeholder="Enter New Product Code"
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label className="d-block fs-14 text-black mb-2">Category</label>
                        <select className="form-control" style={{ fontSize: 15 }}>
                            <option value={0}>-</option>
                            <option value={1}>Peripheral</option>
                            <option value={2}>Hardware</option>
                            <option value={3}>Monitor</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label className="d-block fs-14 text-black mb-2">Model</label>
                        <input
                            type="text"
                            className="form-control"
                            style={{ fontSize: 15 }}
                            placeholder="Enter Model Name"
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label className="d-block fs-14 text-black mb-2">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            style={{ fontSize: 15 }}
                            placeholder="Enter Product Price"
                        />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                        <label className="d-block fs-14 text-black mb-2">Color</label>
                        <div className="row">
                            <div className="col-4">
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="color"
                                defaultValue="Black"
                                id="colorBlack"
                                />
                                <label className="form-check-label" htmlFor="colorBlack">
                                Black
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="color"
                                defaultValue="White"
                                id="colorWhite"
                                />
                                <label className="form-check-label" htmlFor="colorWhite">
                                White
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="color"
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
                                type="radio"
                                name="color"
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
                                type="radio"
                                name="color"
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
                                type="radio"
                                name="color"
                                defaultValue="Green"
                                id="colorGreen"
                                />
                                <label className="form-check-label" htmlFor="colorGreen">
                                Green
                                </label>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="color"
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
                                type="radio"
                                name="color"
                                defaultValue="Yellow"
                                id="colorYellow"
                                />
                                <label className="form-check-label" htmlFor="colorYellow">
                                Yellow
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="color"
                                defaultValue="Orange"
                                id="colorOrange"
                                />
                                <label className="form-check-label" htmlFor="colorOrange">
                                Orange
                                </label>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label className="d-block fs-14 text-black mb-2">Brand</label>
                        <input
                            type="text"
                            className="form-control"
                            style={{ fontSize: 15 }}
                            placeholder="Enter Brand Name"
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label className="d-block fs-14 text-black mb-2">Stock</label>
                        <input
                            type="text"
                            className="form-control"
                            style={{ fontSize: 15 }}
                            placeholder="Enter Stock of the Product"
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <button
                        type="button"
                        className="btn style-four w-100 d-block"
                        data-bs-dismiss="modal"
                        >
                        Reset Values
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button type="button" className="btn style-five w-100 d-block">
                        Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>
  );
}