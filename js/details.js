import { Ui } from "./ui.js";

export class Details{
    
    constructor(idGames){ 

        document.getElementById("btnClose").addEventListener('click',()=>{

            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });

        this.loading = document.querySelector(".loading");

        this.getDetails(idGames)
    }


   async getDetails(idGames){

    this.loading.classList.remove("d-none");

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c3d452a9demsh4107cdb8b97e5ffp1b3f57jsn6d4aea16c2a1',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options);
      const response = await api.json();

        this.loading.classList.add("d-none");

     new Ui().displayDetails(response)
    }
}