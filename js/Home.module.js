import { Ui } from "./ui.module.js";
const ui = new Ui()
export default class Home {
    constructor() {

        this.navbar = document.querySelector('.navbar')
        this.spinner = document.querySelector('.spiner')
        this.gamesSection = document.querySelector('.games-section')


        this.links = document.querySelectorAll('.nav-link')
        this.clickedLink()
        this.getGames('mmorpg')
    }
    clickedLink() {
        this.links.forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector('.active').classList.remove('active')
                e.target.classList.add('active')
                this.getGames(e.target.dataset.category)

            })
        })
    }

    async getGames(category) {
        this.spinner.classList.remove('d-none')
        this.navbar.classList.add('d-none')
        this.gamesSection.classList.add('d-none')

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
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
            ui.displayUi(result)
        } catch (error) {
            console.error(error);
        }

        this.spinner.classList.add('d-none')
        this.navbar.classList.remove('d-none')
        this.gamesSection.classList.remove('d-none')
    }







}