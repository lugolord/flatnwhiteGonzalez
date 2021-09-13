import React from 'react';


const SearchBar = ({ nameFilter, setVisible }) => {
    return (
        <>
            <div className="col-11">
                <input type="text" placeholder="Search..." className="col-11 d-inline" id="searchBar" onChange={(e) => nameFilter(e)}/>
            </div>  

            <div className="col-1 text-end">
                <i className="fas fa-times" id="closeSearchBar" onClick={() => setVisible(false)}></i>
            </div>
        </>
    );
}

export default SearchBar;
