/// EVENTO ABRIR MOBILE
export const dispatchOpenMobileNavbarEvent = () => {
    const event = new CustomEvent('openMobileNavbar', {
        detail: {
          info: 'Pressionado botao para abrir mobile navbar',
        }
    })
    document.dispatchEvent(event)
}
