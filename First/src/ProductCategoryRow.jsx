import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable(){
    return(
        <>
            <SearchBar/>
            <ProductTable/>
        </>
    )
}

export default FilterableProductTable;