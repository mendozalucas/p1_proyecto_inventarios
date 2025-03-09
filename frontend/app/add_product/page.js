"use client";
import { useState } from "react";

export default function AddProduct() {
    const default_formdata = {
        code: 0,
        brand: "",
        category: 0,
        model: "",
        color: "",
        price: 0,
        stock: 0,
        stock_alert: 0
    }

    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [errorMessage2, setErrorMessage2] = useState(false);

    const [formData, setFormData] = useState({        
        code: 0,
        brand: "",
        category: 0,
        model: "",
        color: "",
        price: 0,
        stock: 0,
        stock_alert: 0
    });
    
    const resetValues = () => {
        setFormData(default_formdata);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "category" ? Number(value) : value,
        }));
    };
    
    const handleSubmit = async () => {
        if (
            formData.code <= 0 ||
            formData.brand.trim() === "" ||
            formData.category === 0 ||
            formData.model.trim() === "" ||
            formData.color.trim() === "" ||
            formData.price === 0 ||
            formData.stock === 0
          ) {
            setErrorMessage(true); // Show alert
            setTimeout(() => {
                const alertElement = document.querySelector(".alert");
                if (alertElement) {
                    alertElement.classList.remove("slide-in");
                    alertElement.classList.add("slide-out");
                    setTimeout(() => setErrorMessage(false), 500); // hid alert after 500ms
                }
            }, 3000);
            return;
          }
        try {
            const response = await fetch("http://127.0.0.1:5000/create_product", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
        
            const message = await response.json();
            if ("error" in message) { 
                setErrorMessage2(true); // Show alert
                setTimeout(() => {
                    const alertElement = document.querySelector(".alert");
                    if (alertElement) {
                        alertElement.classList.remove("slide-in");
                        alertElement.classList.add("slide-out");
                        setTimeout(() => setErrorMessage2(false), 500); // hid alert after 500ms
                    }
                }, 3000);
            }
            else {
                setFormData(default_formdata);
                setSuccessMessage(true); // Show alert
                setTimeout(() => {
                    const alertElement = document.querySelector(".alert");
                    if (alertElement) {
                        alertElement.classList.remove("slide-in");
                        alertElement.classList.add("slide-out");
                        setTimeout(() => setSuccessMessage(false), 500); // hid alert after 500ms
                    }
                }, 3000);
            }
        } catch (error) {
            console.error("Error trying to create the product:", error);
        }
    };
    
    return (
        <>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossOrigin="anonymous"
        />
        <h1>Add Product</h1>
        <hr />
        <div className="container mt-3">
            <form action="#">
            <div className="row g-3">
                <div className="col-md-6">
                <div className="form-group">
                    <label className="d-block fs-14 text-black mb-2">Code</label>
                    <input
                    type="number"
                    className="form-control"
                    style={{ fontSize: 15 }}
                    placeholder="Enter New Product Code"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    />
                </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                    <label className="d-block fs-14 text-black mb-2">Category</label>
                    <select 
                        className="form-control" 
                        style={{ fontSize: 15 }}
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                    <option value={0}>-</option>
                    <option value={1}>Other</option>
                    <option value={2}>Peripheral</option>
                    <option value={3}>Microprocessor</option>
                    <option value={4}>GPU</option>
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
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
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
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    />
                </div>
                </div>
                <div className="col-md-6">
                <label>Color</label>
                  <div className="row"> {/* map creates input and label for each color */}
                    {["Black", "White", "Grey", "Red", "Blue", "Pink", "Yellow", "Orange", "Doesnt apply"].map(
                      (color) => (
                        <div key={color} className="col-4">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="color"
                            value={color}
                            checked={formData.color === color}
                            onChange={handleChange}
                          /> {/* Checked: check if color is in the array and checks it*/}
                          <label className="form-check-label ms-2">{color}</label>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                    <label className="d-block fs-14 text-black mb-2">Stock</label>
                    <input
                    type="number"
                    className="form-control"
                    style={{ fontSize: 15 }}
                    placeholder="Enter Stock of the Product"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    />
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
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    />
                </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                    <label className="d-block fs-14 text-black mb-2">Stock alert</label>
                    <input
                    type="number"
                    className="form-control"
                    style={{ fontSize: 15 }}
                    placeholder="Enter Stock Alert"
                    name="stock_alert"
                    value={formData.stock_alert}
                    onChange={handleChange}
                    />
                </div>
                </div>
                <div className="col-md-6">
                <button
                    type="button"
                    className="btn style-four w-100 d-block"
                    onClick={resetValues}
                >
                    Reset Values
                </button>
                </div>
                <div className="col-md-6">
                    <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>
                    Create Product
                    </button>
                </div>
            </div>
            </form>
            {successMessage && (
                <div className="alert alert-success mt-3 slide-in" role="alert">
                    <img src="tick-circle-svgrepo-com.svg" alt="Success" className="me-2" />
                    Product created successfully!
                </div>
            )}
            {errorMessage && (
                <div className="alert alert-danger mt-3 slide-in" role="alert">
                    <img src="cross-circle-svgrepo-com.svg" alt="Error" className="me-2" />
                    Please fill in all required fields.
                </div>
            )}
            {errorMessage2 && (
                <div className="alert alert-danger mt-3 slide-in" role="alert">
                    <img src="cross-circle-svgrepo-com.svg" alt="Error" className="me-2" />
                    A product with the same code already exists.
                </div>
            )}
        </div>
        </>
    );
}