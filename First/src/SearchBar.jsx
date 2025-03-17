function SearchBar(){
    return(
        <>
            <input className="SearchBar" type="search" placeholder="Search" /><br />
            <input type="checkbox" id="ckeck-box"></input>
            <label htmlFor="check-box">Only show products in stock</label>
        </>
    )
}

export default SearchBar;