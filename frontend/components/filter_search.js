"use client";
import { useState } from "react";

const FilterSearch = ({ products, setFilteredProducts }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    
        // Filter products by code while typing
        const filtered = products.filter((product) => String(product.code_product).includes(value)
        );
        setFilteredProducts(filtered);
    };
      
    return (
        <>
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
                    value={searchTerm}
                    onChange={handleSearch}
                />
                </div>
            </div>
        </>
    )
}

export default FilterSearch;