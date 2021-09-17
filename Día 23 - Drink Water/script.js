const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    // --identificar el index del vaso--
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {

    // --llenar los vasos hasta el vaso con el index clickeado--
    smallCups.forEach((cup, idx2) => {
        cup.classList.remove('full')
        if (idx2 <= idx){
            cup.classList.add('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
    
    // --cantidad en litros vacio del vaso grande--
    let textLiters = (totalCups - fullCups) * 0.25
    liters.textContent = textLiters + 'L'

    // --cantidad en % lleno del vaso grande--
    let percentageFull = fullCups/totalCups*100

    if(percentageFull == 0){
        percentage.textContent = ''
    } else {
        percentage.style.height = `${percentageFull}%`
        percentage.textContent = `${percentageFull}%`
    }
    
    // --llenar el vaso grande segun el porcentaje lleno--
    if(percentageFull == 100){
        remained.style.height = '0%'
    }
}