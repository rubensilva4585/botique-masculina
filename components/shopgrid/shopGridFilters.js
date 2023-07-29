import { dispatchChangeShopFilters } from '../../events/dispatchChangeShopFilters.js'

export function shopGridFilters(){
    const shopGridFiltersDiv = document.createElement('div')
    shopGridFiltersDiv.classList.add('products-filters')
    shopGridFiltersDiv.innerHTML=`
        <div class="searchBar">
            <i class="fa fa-search"></i></button>
            <input id="search" name="search" type="text" placeholder="Search...">
        </div>
        <div class="sort">
            <select id="sort" name="sort" id="sort">
                <option value="">-- Sort By --</option>
                <option value="rating">Rating</option>
                <option value="pricelth">Price: Low to High</option>
                <option value="pricehtl">Price: High to Low</option>
                <option value="namelth">Name: A-Z</option>
                <option value="namehtl">Name: Z-A</option>
            </select>
        </div>
    `

    const inputSearch = shopGridFiltersDiv.querySelector("#search")
    const selectSort = shopGridFiltersDiv.querySelector("#sort")

    inputSearch.addEventListener('keyup', (e)=> {
        dispatchChangeShopFilters(inputSearch.value, selectSort.value)
    })
    selectSort.addEventListener('change', (e)=> {
        dispatchChangeShopFilters(inputSearch.value, selectSort.value)
    })

    return shopGridFiltersDiv
}
