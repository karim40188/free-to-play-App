export class showDetails {
    constructor() {
        this.navbar = document.querySelector(".navbar")
        this.gamesSection = document.querySelector('.games-section')
        this.detailsSection = document.querySelector('.details-section')
        this.spinner = document.querySelector('.spiner')
    }



    async details(id) {
        this.spinner.classList.remove('d-none')
        this.navbar.classList.add('d-none')
        this.detailsSection.classList.add('d-none')
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8029373d6fmsh83216cc0e976ff4p134235jsnc36087b709a6',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            this.displayDetails(result)
        } catch (error) {
            console.error(error);
        }

        this.spinner.classList.add('d-none')
        this.detailsSection.classList.remove('d-none')
    }

    displayDetails(gameData) {

        this.navbar.classList.add('d-none')
        this.gamesSection.classList.add('d-none')
        this.detailsSection.classList.remove('d-none')

        let cartona = '';

        cartona += ` <div class="poster col-md-6">
            <img
              class="w-100"
              src=${gameData.thumbnail}
              alt=""
            />
          </div>
          <div class="col-md-6 game-info">
            <h3>Title: ${gameData.title}</h3>
            <p>Category: <span class='highlight'> ${gameData.genre} </span></p>
            <p>Platform: <span class='highlight'>${gameData.platform} </span></p>
            <p>Status:<span class='highlight'> ${gameData.status} </span></p>
            <p>
             ${gameData.short_description}
            </p>
            <button class="btn btn-outline-warning showGame-btn">Show Game</button>
        </div>`

        document.querySelector('.game-details').innerHTML = cartona

        document.querySelector('.showGame-btn').addEventListener("click", () => {
            this.gameUrl(gameData)
        })


        document.querySelector('.x-mark').addEventListener('click', () => {
            this.navbar.classList.remove('d-none')
            this.gamesSection.classList.remove('d-none')
            this.detailsSection.classList.add('d-none')
        })

    }

    gameUrl(game) {
        window.open(`${game.game_url}`, '_blank')
    }


}

