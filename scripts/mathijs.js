const body = document.body

function getCurrentTarget(e) {
    const nowTarget = e.target
    console.log(nowTarget)
}

body.addEventListener('click', getCurrentTarget)