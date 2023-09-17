
function SearchBar() {
    return (
        <div>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <form className="d-flex col-12 col-sm-12">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default SearchBar;