const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  // console.log(e);
  let space 
  if(e.key == ' '){space='Space'} else {space=e.key}

  insert.innerHTML = `
    <div class="key">
      ${space}
      <small>event.key</small>
    </div>
    <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
      </div>

      <div class="key">
        ${e.code}
        <small>event.code</small>
      </div> 
  `
})


