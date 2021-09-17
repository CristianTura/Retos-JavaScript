const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')


ratingsContainer.addEventListener('click', (e) => {
    // ---adicionar clase al elemento seleccionado--
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
     // ---mostrar mensaje con la selección del usuario--
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <p style="font-weight:bold">Thank You!</p>
        <p style="font-weight:bold">Feedback: ${selectedRating}</p>
        <p style="font-weight:bold">We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    ratings.forEach(rating =>{
            rating.classList.remove('active')
        })

}