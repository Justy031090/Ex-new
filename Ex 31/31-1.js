const table = document.createElement('table');
const tableHead = document.createElement('thead')
const tableBody = document.createElement('tbody')
const header = document.createElement('h2');
document.body.appendChild(header).innerHTML = 'Star Wars'
document.body.appendChild(table);
table.appendChild(tableHead).innerHTML = 
`<tr>
<td>Name</td>
<td>Hair Color</td>
<td>Height</td>
<td>Origin Planet</td>
<td>Planet Population</td>
</tr>`
table.appendChild(tableBody)


let planet = [];
let persons = [];
let personsJson = [];
async function getPerson (){
    //initial data of 10 characters
    for (let i=1; i<11; i++){
        personsJson.push(await fetch(`https://swapi.dev/api/people/${[i]}/`))
    }
    // data for each character & its planet
    for (let i=0; i<personsJson.length; i++){
        persons.push(await personsJson[i].json())
        planet.push(await (await fetch (persons[i].homeworld)).json())
    }
    //filling the table
    let tabFill = '';
    for(let i=0; i<persons.length, i<planet.length; i++){
        tabFill +=
                    `<tr>
                    <td>${persons[i].name}</td>
                    <td>${persons[i].hair_color}</td>
                    <td>${persons[i].height}</td>
                    <td>${planet[i].name}</td>
                    <td>${planet[i].population}</td>
                    </tr>`
    }
    tableBody.innerHTML = tabFill;
}
getPerson()
