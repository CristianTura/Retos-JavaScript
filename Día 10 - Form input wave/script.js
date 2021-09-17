const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
        label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay: ${idx*100}ms; margin-left: ${idx*15}px">${letter}</span>`)
        .join('')
})