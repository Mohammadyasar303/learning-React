function ProductTable(){
    return(
        <>
            <table className="table">
                <th className="head">
                    <td>Name</td>
                    <td>Price</td>
                </th>
                
                {/* Friuts */}
                <tr>
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
                </td>

                {/* Vegetables */}
                <tr>
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
            </table>
        </>
    )
}

export default ProductTable;