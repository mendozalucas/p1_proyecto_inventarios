"use client";
import { useEffect, useState } from "react";

export default function ModalFilter( {setProducts}) {
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
  
  const [formData, setFormData] = useState({
    brand: "",
    category: 0,
    model: "",
    colors: [],
    minPrice: "",
    maxPrice: "",
    availability: 0,
  });

    // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        colors: checked ? [...prev.colors, value] : prev.colors.filter((color) => color !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Enviar los datos al backend Flask
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/filter_products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Productos filtrados:", data);
      setProducts(data); // Send the filtered products to the parent component
    } catch (error) {
      console.error("Error al enviar los filtros:", error);
    }
  };

  return (
    <div className="modal fade" id="filterModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Filter</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                {/* Brand */}
                <div className="col-lg-6 mb-3">
                  <label>Brand</label>
                  <input
                    type="text"
                    className="form-control"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="Enter Brand Name"
                  />
                </div>

                {/* Category */}
                <div className="col-lg-6 mb-3">
                  <label>Category</label>
                  <select
                    className="form-control"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value={0}>All</option>
                    <option value={1}>Other</option>
                    <option value={2}>Peripheral</option>
                    <option value={3}>Microprocessor</option>
                    <option value={4}>GPU</option>
                  </select>
                </div>

                {/* Model */}
                <div className="col-lg-6 mb-3">
                  <label>Model</label>
                  <input
                    type="text"
                    className="form-control"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="Enter Model Name"
                  />
                </div>

                {/* Colors */}
                <div className="col-lg-6 mb-3">
                  <label>Color</label>
                  <div className="row"> {/* map creates input and label for each color */}
                    {["Black", "White", "Grey", "Red", "Blue", "Green", "Pink", "Yellow", "Orange"].map(
                      (color) => ( 
                        <div key={color} className="col-4">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="colors"
                            value={color}
                            checked={formData.colors.includes(color)}
                            onChange={handleChange}
                          /> {/* Checked: check if color is in the array and checks it*/}
                          <label className="form-check-label ms-2">{color}</label>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Price Range */}
                <div className="col-lg-6 mb-3">
                  <label>Price Range</label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control"
                        name="minPrice"
                        value={formData.minPrice}
                        onChange={handleChange}
                        placeholder="Min Price"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control"
                        name="maxPrice"
                        value={formData.maxPrice}
                        onChange={handleChange}
                        placeholder="Max Price"
                      />
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="col-lg-6 mb-3">
                  <label>Select Availability</label>
                  <select
                    className="form-control"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                  >
                    <option value={0}>All</option>
                    <option value={1}>In Stock</option>
                    <option value={2}>Out Of Stock</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="col-lg-6 mb-3">
                  <button type="button" className="btn btn-secondary w-100" data-bs-dismiss="modal">
                    Cancel
                  </button>
                </div>
                <div className="col-lg-6 mb-3">
                  <button type="button" className="btn btn-primary w-100" onClick={handleSubmit} data-bs-dismiss="modal">
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