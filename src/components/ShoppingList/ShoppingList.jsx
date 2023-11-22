function ShoppingList({shoppingList}) {
    return(
        <>
            <h2>Shopping List</h2>
            <ul>
                {shoppingList.map((item) => {
                    return (<li key={item.id}>{item.name}: {item.quantity}{item.unit}</li>)
                })}
            </ul>
        
        </>
    )
}

export default ShoppingList