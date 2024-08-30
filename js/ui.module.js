import { showDetails } from "./Details.module.js";

const detailsInstance = new showDetails()

export class Ui {
  constructor() {
    this.navbarWithScroll()
  }
  displayUi(games) {
    let cartona = ''
    for (let i = 0; i < games.length; i++) {
      cartona += `
             <div  class="col-md-3">

              <div id=${games[i].id} class="card bg-transparent text-white">

                <div class="card-body position-relative">
                  <img
                    class="h-100 card-img-top"
                    src=${games[i].thumbnail}
                    alt=""
                  />
                  <div
                    class="d-flex align-content-center justify-content-between mt-3"
                  >
                    <h5>${games[i].title}</h5>
                    <p class="badge free bg-secondary px-2 py-2 d-flex justify-content-center align-items-center">free</p>
                  </div>
                <div>
                    <p class='description'>
                      ${games[i].short_description.split(' ').slice(0, 8).join(" ")}
                    </p>
                  </div>
                </div>
  <div class='card-footer d-flex justify-content-between'>
                   <p class='badge' >shooter</p>
                   <p class='badge' >PC (windows)</p>
              </div>

              </div>
            
            </div>
           `

    }

    document.querySelector('.games').innerHTML = cartona;

    this.clickedGame()
  }

  clickedGame() {
    let gamesCard = document.querySelectorAll('.card')

    for (let i = 0; i < gamesCard.length; i++) {
      gamesCard[i].addEventListener('click', (e) => {
        detailsInstance.details(e.currentTarget.getAttribute('id'))
      })
    }
  }

  navbarWithScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {

      if (window.scrollY >= 50) {
        navbar.classList.add('mt-0')
      } else {
        navbar.classList.remove('mt-0')

      }

    }
    )
  }
}