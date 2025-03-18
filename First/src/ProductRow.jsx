import "./App.css"

function ProductRow({name,price,stocked}){
    
    return(
        <>
            <tr>
                <td className={stocked?"black":"red"}>{name}</td>
                <td>{price}</td>
            </tr>
        </>
    )
}

export default ProductRow;