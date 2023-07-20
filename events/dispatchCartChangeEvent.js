/// EVENTO CARRINHO ALTERADO
export const dispatchCartChangeEvent = (quantity, totalPrice) => {
    const event = new CustomEvent('CartChange', {
        detail: {
          info: 'Carrinho alterado',
          quantity: quantity,
          totalPrice: totalPrice
        }
    })
    document.dispatchEvent(event)
}
