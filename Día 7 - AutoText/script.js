const textEl = document.getElementById('text')
let idx = 0
const speedEl = document.querySelector('.speed')
let speed =   320 - (speedEl.value *30)

let space = false
let text = []
for (i of textEl.textContent) {
    text.push(i)
}
textEl.innerText = ''

writeText()

function writeText (){
    if (space == true){
        space = false
        textEl.innerText += ''
    }else if(text[idx]  == ' ') {
        space = true
        textEl.innerText += ' '+text[idx+1] 
    } else {
        textEl.innerText += text[idx] 
    }
    
    

    idx++

    if(idx > text.length) {
        textEl.innerText = ''
        idx = 0
    }
    
    setTimeout(() => {
        
        writeText()
        
    }, speed)
    
}


speedEl.addEventListener('change', (e) => speed =  320 - (speedEl.value *30) )