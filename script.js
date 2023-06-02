const gallery = document.querySelector('.gallery')

const menuItems = document.querySelectorAll('.card')

console.log(menuItems)

gallery.addEventListener('click', (e) => {

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

const appearOnScreen = {
    origin: "top",
    distance: "100px",
    duration: 3000,
}

ScrollReveal().reveal('.container-all', appearOnScreen)