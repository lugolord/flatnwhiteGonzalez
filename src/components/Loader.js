import React from 'react';

function Loader() {
    return (
        <div id="spinnerContainer" className="position-relative">
            <div className="spinner-border position-absolute top-50 start-50" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;