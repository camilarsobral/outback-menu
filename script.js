const filteredButtons = document.querySelectorAll('.container-buttons button')
const filterableCards = document.querySelectorAll('.filterable-cards .card')

const filterCards = button => {
    document.querySelector('.active').classList.remove('active')
    button.target.classList.add('active')


    filterableCards.forEach(card => {
        card.classList.add('hide')

        if (card.dataset.name === button.target.dataset.name || button.target.dataset.name === 'all')
            card.classList.remove('hide')

        // console.log(card)
    })
}

filteredButtons.forEach(button => button.addEventListener('click', filterCards))