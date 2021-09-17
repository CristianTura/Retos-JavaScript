const divButtons = document.querySelector('#buttons')

const arraySounds = ['applause','boo','gasp','tada','victory','wrong']
let sounds = []
arraySounds.forEach( sound => {
  let btn = document.createElement('button')
  btn.classList.add('btn')
  btn.textContent = sound
  divButtons.appendChild(btn)

  //Crear arreglo de audios para pausarlos
  sounds.push(document.getElementById(sound))
  
   btn.addEventListener('click', () => {
    stopsongs ()
    let audio = document.getElementById(btn.textContent)
    audio.play()
  })
  
})

function stopsongs () {
  sounds.forEach(sound => sound.pause())
}


