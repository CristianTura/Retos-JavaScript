
// ¿Cuál es la opción que sirve?

const panels = document.querySelectorAll('.panel')
//const panels = document.querySelector('.panel')
//const panels = document.getElementById('panel')
//const panels = document.getElementsByClassName('.panel')

let idPanel

panels.forEach((panel) => {
    //console.log(panel)
    panel.addEventListener('click', () => {
        console.log(panel.id)
        panel.classList.add('active')
        idPanel = panel.id
        removeActiveClasses()

    })

})

function removeActiveClasses(){
    panels.forEach((panel) => {
        if(panel.id != idPanel) {
            panel.classList.remove('active')
        }
    })}
