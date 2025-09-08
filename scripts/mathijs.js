const arr = [
    {
        name: "Mathijs",
        img: "https://townsquare.media/site/295/files/2020/09/super-mario-bros.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
        profileCard: "https://mathijsn.github.io/your-tribe-profile-card/"
        },
    {
        name: "Yassine",
        img: "https://unocasa.com/cdn/shop/articles/types_of_coffee_91a828a5-7ff3-427d-acaa-c8b7289c9e5a_600x.jpg?v=1621261041",
        profileCard: "https://statics.teams.cdn.office.net/evergreen-assets/safelinks/2/atp-safelinks.html"
        },
    {
        name: "Anass",
        img: "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660487.jpg",
        profileCard: "https://anass-kh.github.io/your-tribe-profile-card/"
        }
]

const randomNumberArr = []

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


function randomNumber() {
    const number = Math.floor(Math.random() * arr.length).toString()

    randomNumber.push(number)
}

renderTable()
randomNumber()

console.log(randomNumber)