  export const filterByDirector= (films, directorName)=>{
  const Directors=films.filter(film=>{
  return film.director === directorName
  })
  return Directors
  }
  

//if para retornar todos rreturn peliculas
//else film.filter (director)
//export const Directors=(films)=>{
//let director=films.filter(films=>films.director==='Hayao Miyazaki')
//return director
//}
//console.log ("si funciona")
/*export const AllMovies?? = (data, condition) => {
    return ..........(condition);
  };
  export const ..... = (data, Order) => {
    if (Order === "a_z") {
      return ......(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    } else {
      return data.reverse();
    }
  };*/