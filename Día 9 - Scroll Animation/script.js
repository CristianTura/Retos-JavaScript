const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

//checkBoxes()
window.onload = checkBoxes()

function checkBoxes() {
    
    // console.log(window.innerHeight / 5 * 4)
    
    const triggerBottom = window.innerHeight / 5 * 4
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        console.log('altura de ventana'+triggerBottom)
         console.log('altura de caja'+boxTop)
        if (boxTop<triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
        
    })
}