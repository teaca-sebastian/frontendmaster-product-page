// Media query for switching cart from dropdown to collapse

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

// Add active .selected class to carousel thumbnail

const carouselButtons = document.querySelectorAll('[data-bs-target="#productCarousel"')
const productCarousel = document.querySelector('#productCarousel')

// 1 create handleActive() 

// 1.1 when changing active image in carousel, add .selected to
// the specific thumbnail

// 1.2 when clicking on one of the thumbanils, it should display
// on the carousel