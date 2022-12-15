const datos = data

let divContainer = document.getElementById("container")

function renderCards(info) {
  let template = ""
  info.forEach(item => {
    template += `<div class="card" style="width: 18rem; height: 11rem">
                                <div class="card-body">
                                  <h5 class="card-title">${item.name}</h5>
                                  <p class="card-text">${item.text}/p>
                                  <a href="./details.html?id=${item._id}" class="btn btn-primary">View more</a>
                                </div>
                              </div>
    `
  })
  divContainer.innerHTML = template
}


renderCards(datos)