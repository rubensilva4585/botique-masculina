/// EVENTO PARA DISPARAR A MUDANÇA DE FILTROS NA PÁGINA DE SHOP
export const dispatchChangeShopFilters = (inputSearch, sortValue) => {
    const event = new CustomEvent('changeShopFilters', {
        detail: {
          info: 'Pressionado botao para abrir mobile navbar',
          inputSearch: inputSearch,
          sortValue: sortValue
        }
    })
    document.dispatchEvent(event)
}