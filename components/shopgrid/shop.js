import '../../styles/shop.css'
import { createPageTitle } from "./../createPageTitle.js";
import { shopGridFilters } from "./shopGridFilters.js";
import { createProductCard } from "./productCard.js";
import { getAllProducts } from "../../logic/getAllProducts.js";
import { getFilteredProducts } from "../../logic/getFilteredProducts.js";

export function createShopGrid(){
    const productsGridContainerEl = document.createElement('div')
    productsGridContainerEl.classList.add('container')
    productsGridContainerEl.appendChild(createPageTitle('Our Products', "Explore the Latest Men's Fashion"))
    productsGridContainerEl.appendChild(shopGridFilters())

    const productsGridEl = document.createElement('div')
    productsGridEl.classList.add('products-grid')
    productsGridContainerEl.appendChild(productsGridEl)

    const loadProductsCards = (products) => {
        products.map((product) => productsGridEl.appendChild(createProductCard(product)))
    }

    let AllProducts = [];
    getAllProducts(true).then((products) => {
        loadProductsCards(products)
        AllProducts = products
    });

    // shop filters
    document.addEventListener('changeShopFilters', (e)=> {
        productsGridEl.innerHTML = ''
        const inputSearch = e.detail.inputSearch.toLowerCase();
        const sortValue = e.detail.sortValue;

        loadProductsCards(getFilteredProducts(inputSearch, sortValue, AllProducts))
    })

    return productsGridContainerEl
}