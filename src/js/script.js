const cartButton = document.querySelector('.cart-button')
const cartDropdown = document.querySelector('.cart-dropdown')
const cartCollapse = document.querySelector('.cart-collapse')

function handleCart(x) {
  if (x.matches) { // If media query matches
    cartButton.setAttribute('data-bs-toggle', 'collapse')
    cartButton.setAttribute('data-bs-target', '#cart')
    cartDropdown.classList.remove('show')
  } else {
    cartButton.setAttribute('data-bs-toggle', 'dropdown')
    cartCollapse.classList.remove('show')
  }
}
// Bootstrap sm breakpoint (media query)
var x = window.matchMedia("(max-width: 576px)")

handleCart(x) // Call listener function at run time
x.addListener(handleCart) // Attach listener function on state changes