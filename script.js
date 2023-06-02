const gallery = document.querySelector('.gallery')

const menuItems = document.querySelectorAll('.card')

console.log(menuItems)

gallery.addEventListener('click', (e) => {

    // console.log(e)

    if (e.target.classList.contains('filter')) {
        gallery.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')

        const filterValue = e.target.getAttribute('data-filter')
        console.log(filterValue)

        menuItems.forEach(item => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.add('show')
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
        })
    }

})

// document.querySelector('.active').classList.remove('active')
// e.target.classList.add('active')


// const filteredButtons = document.querySelectorAll('.container-buttons button')
// const filterableCards = document.querySelectorAll('.filterable-cards .card')

// const filterCards = button => {
//     document.querySelector('.active').classList.remove('active')
//     button.target.classList.add('active')

//     filterableCards.forEach(card => {
//         card.classList.add('hide')

//         if (card.dataset.name === button.target.dataset.name || button.target.dataset.name === 'all')
//             card.classList.remove('hide')


//     })
// }

// filteredButtons.forEach(button => button.addEventListener('click', filterCards))

// const animation = {
//     origin: "top",
//     distance: "100px",
//     duration: 4000,
// }

// ScrollReveal().reveal('.container-all', animation)