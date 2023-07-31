export function getFilteredProducts(inputSearch, sortValue, products) {
    switch(sortValue){
        case 'rating':
            products.sort((a, b) => {
                return b.rating - a.rating
            })
            break;
        case 'pricelth':
            products.sort((a, b) => {
                return a.price - b.price
            })
            break;
        case 'pricehtl':
            products.sort((a, b) => {
                return b.price - a.price
            })
            break;
        case 'namelth':
            products.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
            break;
        case 'namehtl':
            products.sort((a, b) => {
                return b.name.localeCompare(a.name)
            })
            break;
        default:
            products.sort((a, b) => {
                return b.id - a.id
            })
            break;
    }

    if(inputSearch.length <= 1) return products

    return products.filter((product) => {  
            return product.name.toLowerCase()
                .includes(inputSearch)  
        })
}