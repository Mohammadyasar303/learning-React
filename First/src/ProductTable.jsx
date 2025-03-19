const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(){
    
    let rows = [];
    let categoryCreated="";
    
        
        for (let i=0; i<PRODUCTS.length; i++){
            // ProductCategoryRow
            if(PRODUCTS[i].category != categoryCreated){
                // create
                rows.push(<ProductCategoryRow key={PRODUCTS[i].category} category={PRODUCTS[i].category}/> );
                // update
                categoryCreated= PRODUCTS[i].category;
            }

            // ProductRow
            rows.push(<ProductRow key={PRODUCTS[i].name} name={PRODUCTS[i].name} price={PRODUCTS[i].price} stocked={PRODUCTS[i].stocked}/>);

        }
    
    return(
        <>
            <table>
                <thead>
                    
                    <tr>
                        <th>Name</th>    
                        <th>Price</th>    
                    </tr>    
                    
                    <tbody>
                        {rows}
                    </tbody>

                </thead>
            </table>
        </>
    )
}

export default ProductTable;    
            {/* <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    <ProductCategoryRow category={"fruits"}/>
                    <ProductRow Name={"apple"}Price={"$1"}/>
                    <ProductRow Name={"apple"}Price={"$1"}/>
                    <ProductRow Name={"apple"}Price={"$1"}/>
                    <ProductCategoryRow category={"vegetables"}/>
                    <ProductRow Name={"Spinach"}Price={"$1"}/>
                    <ProductRow Name={"Spinach"}Price={"$1"}/>
                    <ProductRow Name={"Spinach"}Price={"$1"}/>
                </tbody>
                
            </table> */}

            {/* <table className="table">
                <th className="head">
                    <td>Name</td>
                    <td>Price</td>
                </th> */}
                
                {/* Friuts */}
                {/* <tr>
                    <th>
                        <td>Fruits</td>
                    </th>
                </tr>
                
                <td>
                    <tr>Apple</tr>
                    <tr>Grape</tr>
                    <tr>Banana</tr>
                </td>

                <td>
                    <tr>$1</tr>
                    <tr>$1</tr>
                    <tr>$2</tr>
                </td> */}

                {/* Vegetables */}
                {/* <tr>
                    <th>
                        <td>Vegetables</td>
                    </th>
                </tr>
                
                <td>
                    <tr>Carrot</tr>
                    <tr>Pumpkin</tr>
                    <tr>Peas</tr>
                </td>

                <td>
                    <tr>$1</tr>
                    <tr>$1</tr>
                    <tr>$2</tr>
                </td>
            </table> */}

            
        