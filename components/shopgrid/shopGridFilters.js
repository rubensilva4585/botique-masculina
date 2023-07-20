export function shopGridFilters(){
    const shopGridFiltersDiv = document.createElement('div')
    shopGridFiltersDiv.classList.add('products-filters')
    shopGridFiltersDiv.innerHTML=`
        <div class="searchBar">
            <i class="fa fa-search"></i></button>
            <input type="text" placeholder="Search..." name="search">
            </div>
            <div class="sort">
            <!-- <label for="sort">Sort By:</label> -->
            <select name="sort" id="sort">
                <option value="popularity">-- Sort By --</option>
                <option value="popularity">Popularity</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
                <option value="lowtohigh">Name: A-Z</option>
                <option value="hightolow">Name: Z-A</option>
                <option value="newest">Newest Arrivals</option>
            </select>
        </div>
    `

    return shopGridFiltersDiv
}
