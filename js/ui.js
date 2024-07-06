
export class Ui{
    constructor(){}

    displayGames(data){
        let gamesBox = ``;

        for( let i = 0 ; i < data.length ; i++){
            gamesBox += `<div class="col-md-6 col-sm-12 col-lg-4 col-xl-3 g-4">
                <div data-id="${data[i].id}" class="card h-100 bg-transparent">

                  <div class="card-body">
                    <img src="${data[i].thumbnail}" class="w-100" alt="img">
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <h3 class="h6 small text-white">${data[i].title}</h3>
                      <span class="badge text-bg-primary p-2">Free</span>
                    </div>
                    <p class="card-text text-light small text-center opacity-50">${data[i].short_description.split(" ", 8)}</p>
                  </div>
                  <footer class="card-footer small d-flex justify-content-between align-items-center">
                    <span class="badge badge-color">${data[i].genre}</span>
                    <span class="badge badge-color">${data[i].platform}</span>
                  </footer>
                </div>
              </div>`;
        }

        document.getElementById("gameData").innerHTML = gamesBox;
    }

   displayDetails(data){

    const detailsBox = `<div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100" alt="img">
          </div>
          <div class="col-md-8">
            <h3>Title: ${data.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${data.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span></p>
            <p>Status: <span class="badge text-bg-info"> ${data.status}</span></p>
            <p class="small">${data.description}</p>

              <a href="${data.game_url}" target="_blank" class="btn btn-outline-warning text-white">Show Game</a>
          </div>`;

          document.getElementById("detailsContent").innerHTML = detailsBox;
   }
}