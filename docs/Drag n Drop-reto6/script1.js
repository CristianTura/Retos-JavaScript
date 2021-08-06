const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart, false )
fill.addEventListener('dragend', dragEnd, false )

for(const empty of empties) {
    empty.addEventListener("dragenter", dragEnter, false);
    empty.addEventListener("dragleave", dragLeave, false);
    empty.addEventListener("dragover", dragOver, false);
    empty.addEventListener("drop", dragDrop, false);
}

function dragStart(e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("ID", this.id);
    
    // setTimeout()
}

function dragEnd() {
    // this.
}

function dragOver(e) {
    if (e.preventDefault) {e.preventDefault()};
        return false;   
}

function dragEnter(e) {
    this.classList.add('hovered')
    
}

function dragLeave(e) {
    this.classList.remove('hovered')
}

function dragDrop(e) {
    if (e.preventDefault) {e.preventDefault()};
    if (e.stopPropagation) {e.stopPropagation()};
	
    this.classList.remove('hovered')
 
    let id = e.dataTransfer.getData("ID"); // Obtenemos el ID
    let elem = document.getElementById(id);
    elem.parentNode.removeChild(elem); // Se elimina el elemento que estamos arrastrando
	
    this.appendChild(elem); // Se añade en el destino
    return false;
}