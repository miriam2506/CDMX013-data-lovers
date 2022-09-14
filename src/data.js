export const filterByDirector = (films, directorName) => {
  const Directors = films.filter(film => {
    return film.director === directorName
  })
  return Directors
}

export const filterByProducer = (films, producerName) => {
  const Producers = films.filter(film => {
    return film.producer === producerName
  })
  return Producers
}

export const filterByYear = (films, releaseDate) => {
  const Years = films.filter(film => {
    return film.release_date === releaseDate
  })
  return Years
}

export function sortFilms(films, orderOption) {
  if (orderOption === "A to Z") {
    return [...films].sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      else if (a.title > b.title) {
        return 1
      }
      return 0
    });
  }
  else if (orderOption === "Z to A") {
    return [...films].sort((b, a) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    });
  }
}

export const getAverageScore = (films) => {
  let acumulator = 0
  films.forEach(film => {
    acumulator+=Number(film.rt_score)
  
  })
  
  let division= acumulator / films.length
let result=Math.round(division)
let total =result + "%"
return (total)

};
