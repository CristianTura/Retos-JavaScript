const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

//  Probar 
// loveMe.addEventListener('dblclick', (e) => {
//     console.log('123')
// } )


loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
        // console.log(clickTime);
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            // console.log(123);
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})


const createHeart = (e) => {
    timesClicked +=1
    times.textContent = timesClicked

    const x = e.clientX
    const y = e.clientY
    const offy = loveMe.offsetTop
    const offx = loveMe.offsetLeft
    // console.log(x,y,offx, offy)
    let heart = document.createElement('i')
    heart.classList.add('fa', 'fa-heart')
    heart.style.left = x-offx+'px'
    heart.style.top = y-offy+'px'
    console.log(x-offx)
    loveMe.appendChild(heart)

}