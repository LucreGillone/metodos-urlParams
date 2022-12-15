const info = data

const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")

const idResumido = new URLSearchParams(location.search).get("id")

console.log(id)
console.log(idResumido)

const person = info.find(item =>item._id === id)
console.log(person)

const container = document.getElementById("container")

container.innerHTML = `
                        <div class="card text-center" style="width: 30rem">
                        <div class="card-header">
                            ${person.region}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${person.name}</h5>
                            <p class="card-text">${person.text}</p>
                        </div>
                        <div class="card-footer text-muted">
                            ${person.country ? person.country : "No country found"}
                        </div>
                    `

// Condicional normal

// if(condicion){
//     esto si true
// } else {
//     esto si false
// }

// Ternario

// condición 
// ? esto si true
// : esto si false

// condición ? esto si true : sino esto 