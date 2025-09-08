const gridElement = document.querySelector(".bento-grid")

function getCurrentTarget(e) {
    console.log(e.target)
    
    if (e.target && e.target.matches('.bento-grid')) {

        e.target.classList.toggle('hovered')
    }

}

gridElement.addEventListener('mouseenter', getCurrentTarget)
gridElement.addEventListener('mouseleave', getCurrentTarget)