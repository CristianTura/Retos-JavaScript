const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('.list')
// console.log(contents)
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllItems()
        hideAllContents() 
        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => {
        content.classList.remove('show')
    })
}


function hideAllItems() {
    listItems.forEach( item => {
        item.classList.remove('active')
    })
}
