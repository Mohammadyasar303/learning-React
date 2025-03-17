import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function TabelBody(props ){
    return(
        <>
            <div className="div">
                <SearchBar/>
                <ProductTable/>
            </div>
            <p>This is my fname : {fName}</p>
            <p>This is my lname : {lName}</p>
        </>
    )
}

export default TabelBody;