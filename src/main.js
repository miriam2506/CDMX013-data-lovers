import allData from './data/ghibli/ghibli.js'
import { filterByDirector, filterByProducer, filterByYear, sortFilms, getAverageScore } from './data.js'

const root = document.getElementById('root')

const films = allData.films

const generatorHTML = (films) => {

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
films.forEach(oneFilm => root.appendChild(generatorHTML(oneFilm)))

document.getElementById('filterDirector').addEventListener('change', function (e) {

    root.innerHTML = ""
    if (e.target.value == "All Directors") {
        films.forEach(oneFilm => root.appendChild(generatorHTML(oneFilm)))
    }
    else {
        filterByDirector(films, e.target.value).forEach(oneFilm => root.appendChild(generatorHTML(oneFilm)))
    }
})


document.getElementById('filterProducer').addEventListener('change', function (e) {
    root.innerHTML = ""
    if (e.target.value == "All Producers") {
        films.forEach(oneFilm => root.appendChild(generatorHTML(oneFilm)))
    }
    else {
        filterByProducer(films, e.target.value).forEach(oneFilm => root.appendChild(generatorHTML(oneFilm)))
    }
})

document.getElementById('filterReleaseyear').addEventListener('change', function (e) {

    root.innerHTML = ""
    if (e.target.value == "Year") {
        films.forEach(oneFilm => root.appendChild(generatorHTML(oneFilm)))
    }
    else {
        filterByYear(films, e.target.value).forEach(oneFilm => root.appendChild(generatorHTML(oneFilm)))
    }
})

document.getElementById('selectOrder').addEventListener('change', function (e) {
    root.innerHTML = ""

    if (e.target.value === "Order") {
        films.forEach(oneFilm => root.appendChild(generatorHTML(oneFilm)))
    }
    else {
        sortFilms(films, e.target.value).forEach(oneFilm => root.appendChild(generatorHTML(oneFilm)))
    }
});

const stadistic = document.querySelector('#random')
stadistic.addEventListener('click', function () {
    const screen = getAverageScore(films)
    root.innerHTML = `<h6>Did you know that?
<p>The average of Studio Ghibli films </p>
<p>acceptances is of ${screen} </p>
</h6> `;
});
