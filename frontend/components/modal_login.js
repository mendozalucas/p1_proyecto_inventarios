"use client";

import { useEffect } from "react";

export default function ModalLogin() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex={-1}
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              Login
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <input type="text" className="form-control mb-2" placeholder="User" required />
            <input type="password" className="form-control mb-2" placeholder="Password" required />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}