import '../../styles/shop.css'
import {createPageTitle} from "./../createPageTitle.js";
import {shopGridFilters} from "./shopGridFilters.js";
import {createProductCard} from "./productCard.js";
import {getAllProducts} from "../../logic/getAllProducts.js";

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

        switch(sortValue){
            case 'rating':
                AllProducts.sort((a, b) => {
                    return b.rating - a.rating
                })
                break;
            case 'pricelth':
                AllProducts.sort((a, b) => {
                    return a.price - b.price
                })
                break;
            case 'pricehtl':
                AllProducts.sort((a, b) => {
                    return b.price - a.price
                })
                break;
            case 'namelth':
                AllProducts.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
                break;
            case 'namehtl':
                AllProducts.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
                break;
            default:
                AllProducts.sort((a, b) => {
                    return b.id - a.id
                })
                break;
        }

        loadProductsCards(
            AllProducts.filter((product) => {  
                return product.name.toLowerCase()
                    .includes(inputSearch)  
            })
        )
    })

    return productsGridContainerEl
}