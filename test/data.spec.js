import { filterByDirector } from '../src/data.js';

describe('filterByDirector', () => {
  it('filtra por Director Hayao Miyazaki', () => {
    let data=[
      {director:'Hayao Miyazaki'},
      {director:'Hiromasa Yonebayashi'}
    ];
  
    let director='Hayao Miyazaki';
  
    let resultadoEsperado=[{director:'Hayao Miyazaki'}];
  
    let resultadoReal=filterByDirector(data, director);
  
    expect(resultadoReal).toEqual(resultadoEsperado);
  });

});

describe('sortFilms', ()=>{

  it('should sort by films ascending', ()=>{
      const arrExpected = [{title: 'Castle in the Sky'}, {title: 'Kikis Delivery Service'}];

      console.log(arrExpected);
  });

  it('should sort by films descneding', ()=>{

  });

});
/*;
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
*/