// ### Media query for switching cart from dropdown to collapse

const cartButton = document.querySelector('.cart-button')
const cartDropdown = document.querySelector('.cart-dropdown')
const cartCollapse = document.querySelector('.cart-collapse')

const productCarousel = document.querySelector('#productCarousel')
const carouselThumbnails = document.querySelectorAll('#carouselThumbnailsContainer img')
// modal variables
const modalCarousel = document.querySelector('#modalCarousel')
const modalThumbnails = document.querySelectorAll('#modalThumbnailsContainer img')

function handleMobile(x) {
    if (x.matches) {
        // If media query matches
        cartButton.setAttribute('data-bs-toggle', 'collapse')
        cartButton.setAttribute('data-bs-target', '#cart')
        cartDropdown.classList.remove('show')

        document.querySelectorAll('img').forEach(image => {
            image.removeAttribute('data-bs-toggle')
        })

        document.querySelector('#carouselThumbnailsContainer').classList.remove('w-75')
        document.querySelector('#carouselThumbnailsContainer').classList.add('w-100')
        productCarousel.classList.remove('w-75')
        productCarousel.classList.add('w-100')
        productCarousel.querySelector('.carousel-inner').classList.remove('rounded-4')
    } else {
        cartButton.setAttribute('data-bs-toggle', 'dropdown')
        cartCollapse.classList.remove('show')

        productCarousel.querySelectorAll('img').forEach(image => {
            image.setAttribute('data-bs-toggle', 'modal')
        })

        document.querySelector('#carouselThumbnailsContainer').classList.remove('w-100')
        document.querySelector('#carouselThumbnailsContainer').classList.add('w-75')
        productCarousel.classList.remove('w-100')
        productCarousel.classList.add('w-75')
        productCarousel.querySelector('.carousel-inner').classList.add('rounded-4')
    }
}
// Bootstrap sm breakpoint (media query)
var x = window.matchMedia("(max-width: 576px)")

handleMobile(x) // Call listener function at run time
x.addListener(handleMobile) // Attach listener function on state changes
// i know this is deprecated but it works :)

// ### Carousel thumbnails and modal carousel scripts:

// Pure utility functions:

function updateThumbnails(thumbnails, index) {
    // delete .selected class from all
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('selected')
    })
    // update the one in the arguments
    thumbnails[index].classList.add('selected')
}

function updateCarouselActive(carousel, index) {
    const carouselItems = carousel.querySelectorAll('.carousel-item')
    // remove .active from all
    carouselItems.forEach(item => {
        item.classList.remove('active')
    })
    // add .active to one with showIndex index
    carouselItems[index].classList.add('active')
}

// update carousel and thumbnails on carousel slide

productCarousel.addEventListener('slide.bs.carousel', event => {
    const index = event.relatedTarget.querySelector('img').dataset.index - 1
    updateThumbnails(carouselThumbnails, index)
    updateCarouselActive(modalCarousel, index)
    updateThumbnails(modalThumbnails, index)
})

modalCarousel.addEventListener('slide.bs.carousel', event => {
    const index = event.relatedTarget.querySelector('img').dataset.index - 1
    updateThumbnails(modalThumbnails, index)
})

// update carousel and thumbnails on thumbnail click

carouselThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateCarouselActive(productCarousel, index)
        updateThumbnails(carouselThumbnails, index)
        updateCarouselActive(modalCarousel, index)
        updateThumbnails(modalThumbnails, index)
    })
})

modalThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateCarouselActive(modalCarousel, index)
        updateThumbnails(modalThumbnails, index)
    })
})

