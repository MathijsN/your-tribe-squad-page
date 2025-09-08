import { arr } from '../scripts/data.js'

const gridElement = document.querySelector(".bento-grid")

function renderTable() {
    arr.forEach((person) => 
        gridElement.innerHTML += `
        <div class="grid-wrapper">
                <a href="${person.profileCard}" target="_blank">
                <div class="grid-img-wrapper">
                    <img src=${person.img} alt="" class="grid-img">
                </div>
                <div class="grid-text-wrapper" id="${person.name}">
                    <p>${person.name}</p>
                    <img src="assets/svg/arrow.svg" alt="" class="arrow-svg">
                </div>
                </a>
        </div>
        `
)
}

renderTable()
