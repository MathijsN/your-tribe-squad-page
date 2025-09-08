const body = document.body

function changeClass(e) {
    const nowTarget = e.target
    console.log(nowTarget)
}

body.addEventListener('click', changeClass)