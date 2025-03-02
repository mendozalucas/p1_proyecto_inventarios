"use client";
import { useEffect, useState } from "react";
/*import { getMensaje } from "../apicalls/apicalls";*/
import ModalFilter from "../../components/modal_filter";

export default function UpdateStock() {
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
    
      useEffect(() => {
        const incrementQuantity = (button) => {
          const input = button.parentElement.querySelector('input');
          input.value = parseInt(input.value) + 1;
        };
    
        const decrementQuantity = (button) => {
          const input = button.parentElement.querySelector('input');
          if (parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;
          }
        };
    
        const resetQuantities = () => {
          const inputs = document.querySelectorAll('tbody input[type="text"]');
          inputs.forEach(input => {
            input.value = 0;
          });
        };
    
        const incrementButtons = document.querySelectorAll('.btn-outline-success');
        const decrementButtons = document.querySelectorAll('.btn-outline-danger');
        const resetButton = document.querySelector('.btn-primary');
    
        incrementButtons.forEach(button => {
          button.addEventListener('click', () => incrementQuantity(button));
        });
    
        decrementButtons.forEach(button => {
          button.addEventListener('click', () => decrementQuantity(button));
        });
    
        resetButton.addEventListener('click', resetQuantities);
    
        return () => {
          incrementButtons.forEach(button => {
            button.removeEventListener('click', () => incrementQuantity(button));
          });
    
          decrementButtons.forEach(button => {
            button.removeEventListener('click', () => decrementQuantity(button));
          });
    
          resetButton.removeEventListener('click', resetQuantities);
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
            <h1 style={{ marginTop: 60 }}>Update Stock</h1>
            <hr />
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
                <th scope="col">Total Value</th> {/* See */}
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
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
                        onClick={() => decrementQuantity(this)}
                        >
                        <img src="dash.svg" alt="Decrement" />
                        </button>
                    <input
                        type="text"
                        style={{ width: 40, height: 30, fontSize: 20 }}
                        className="form-control text-center"
                        defaultValue={0}
                        readOnly=""
                    />
                    <button
                        className="btn btn-outline-success btn-sm"
                        type="button"
                        onClick={() => incrementQuantity(this)}
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
                <tr>
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
                        onClick={() => decrementQuantity(this)}
                    >
                        <img src="dash.svg" alt="Decrement" />
                    </button>
                    <input
                        type="text"
                        style={{ width: 40, height: 30, fontSize: 20 }}
                        className="form-control text-center"
                        defaultValue={0}
                        readOnly=""
                    />
                    <button
                        className="btn btn-outline-success btn-sm"
                        type="button"
                        onClick={() => incrementQuantity(this)}
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
                <tr>
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
                        onClick={() => decrementQuantity(this)}
                    >
                        <img src="dash.svg" alt="Decrement" />
                    </button>
                    <input
                        type="text"
                        style={{ width: 40, height: 30, fontSize: 20 }}
                        className="form-control text-center"
                        defaultValue={0}
                        readOnly=""
                    />
                    <button
                        className="btn btn-outline-success btn-sm"
                        type="button"
                        onClick={() => incrementQuantity(this)}
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
            </tbody>
            <tfoot>
                <tr>
                <td colSpan={8} className="text-center">
                    <button
                    className="btn btn-primary"
                    type="button"
                    onclick="resetQuantities()"
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