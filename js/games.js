import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Games{

    constructor(){
       
        document.querySelectorAll(".nav-link").forEach(link=>{
            link.addEventListener('click',()=>{

                document.querySelector(".navbar-nav .active").classList.remove('active')
                link.classList.add('active');


              const cateData = link.getAttribute("data-category");
              this.getGames(cateData);

            });
        });

        this.loading = document.querySelector(".loading");
        this.details = document.querySelector(".details");
        this.games = document.querySelector(".games");

        this.ui = new Ui();

        this.getGames("mmorpg");
    }




    async getGames(category){

        this.loading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c3d452a9demsh4107cdb8b97e5ffp1b3f57jsn6d4aea16c2a1',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();

      this.loading.classList.add("d-none");

      this.ui.displayGames(response)


      document.querySelectorAll(".card").forEach(card=>{
        card.addEventListener('click' , ()=>{
          
            this.details.classList.remove("d-none");
            this.games.classList.add("d-none");

            const detailsSec = new Details(card.getAttribute("data-id"));

        });
      });


    }



}