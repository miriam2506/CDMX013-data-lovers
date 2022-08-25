import allData from'./data/ghibli/ghibli.js'
import {firstDirector} from'./data.js'
const director=allData.director;

const root=document.getElementById('root')

const films=allData.films

const generadorHTML=(films)=>{
    
    const div=document.createElement('div')
    div.classList='filmStyle'

    const title=document.createElement('h2')
    title.textContent=films.title

    const year=document.createElement('h5')
    year.textContent=films.release_date

    const poster= document.createElement('img')
    poster.setAttribute ("src",films.poster)

    div.append(poster,title,year)
    return div
}
films.forEach(oneFilm=>root.appendChild(generadorHTML(oneFilm))) 


