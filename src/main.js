import allData from './data/ghibli/ghibli.js'
import { filterByDirector, filterByProducer, filterByYear, sortFilms, getAverageScore } from './data.js'

const root = document.getElementById('root')

const films = allData.films

const generadorHTML = (films) => {

    const div = document.createElement('div')
    div.classList = 'filmStyle'

    const title = document.createElement('h2')
    title.textContent = films.title

    const year = document.createElement('h5')
    year.textContent = films.release_date

    const poster = document.createElement('img')
    poster.setAttribute("src", films.poster)

    div.append(poster, title, year)
    return div
}
films.forEach(oneFilm => root.appendChild(generadorHTML(oneFilm)))

document.getElementById('filterDirector').addEventListener('change', function (e) {

    root.innerHTML = ""
    if (e.target.value == "All Directors") {
        films.forEach(oneFilm => root.appendChild(generadorHTML(oneFilm)))
    }
    else {
        filterByDirector(films, e.target.value).forEach(oneFilm => root.appendChild(generadorHTML(oneFilm)))
    }
})


document.getElementById('filterProducer').addEventListener('change', function (e) {
    root.innerHTML = ""
    if (e.target.value == "All Producers") {
        films.forEach(oneFilm => root.appendChild(generadorHTML(oneFilm)))
    }
    else {
        filterByProducer(films, e.target.value).forEach(oneFilm => root.appendChild(generadorHTML(oneFilm)))
    }
})

document.getElementById('filterReleaseyear').addEventListener('change', function (e) {

    root.innerHTML = ""
    if (e.target.value == "Year") {
        films.forEach(oneFilm => root.appendChild(generadorHTML(oneFilm)))
    }
    else {
        filterByYear(films, e.target.value).forEach(oneFilm => root.appendChild(generadorHTML(oneFilm)))
    }
})

document.getElementById('selectOrder').addEventListener('change', function (e) {
    root.innerHTML = ""

    if (e.target.value === "Order") {
        films.forEach(oneFilm => root.appendChild(generadorHTML(oneFilm)))
    }
    else {
        sortFilms(films, e.target.value).forEach(oneFilm => root.appendChild(generadorHTML(oneFilm)))
    }
});

const cosa = document.querySelector('#random')
cosa.addEventListener('click', function () {
    const pantalla = getAverageScore(films)
    root.innerHTML = `<h6>¿Sabías que?
<p>En promedio la aceptación de las películas</p>
<p>de Studio Ghibli es del ${pantalla} </p>
</h6> `;

});

/*const mostrar= document.querySelector("#random");
const message= document.querySelector("#text")
const close= document.querySelector("#close")

mostrar.addEventListener("click",()=>{
message.showModal ();

})
close.addEventListener("click",()=>
{

    message.close();


})
*/
console.log(getAverageScore(films))




