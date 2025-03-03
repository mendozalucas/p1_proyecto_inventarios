export default function FilterSearch() {
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
        </>
    )
}