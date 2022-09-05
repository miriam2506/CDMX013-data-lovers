import { filterByDirector, filterByProducer, sortFilms} from '../src/data.js';

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

describe('filterByProducer', () => {
  it('filtrar por producer Isao Takahata', () => {

    let data=[
        {producer:'Isao Takahata'},
        {producer:'Hayao Miyazaki'}
      ];
  
      let producer='Isao Takahata';
      
      let resultadoEsperado=[{producer:'Isao Takahata'}];
  
      let resultadoReal=filterByProducer(data, producer);
  
      expect(resultadoReal).toEqual(resultadoEsperado);
    })
  });

  describe('sortFilms', () => {
    it('ascending Order', () => {
  
      let data=[
        {title:'Castle in the sky'},
        {title:'W'}];
    
        let sortTitleas='A to Z';
    
        let resultadoEsperado=[{title:'Castle in the sky'},{title:'W'}];
    
        let resultadoReal=sortFilms(data, sortTitleas);
    
        expect(resultadoReal).toStrictEqual(resultadoEsperado);
      });
  
      it('descending Order', () => {
  
        let data=[{title:'When marnie was there'},
            {title:'Castle in the sky'}];
      
          let sortTitledes='Z to A';
      
          let resultadoEsperado=[{title:'When marnie was there'},{title:'Castle in the sky'}];
      
          let resultadoReal=sortFilms(data, sortTitledes);
      
          expect(resultadoReal).toStrictEqual(resultadoEsperado);
        });
      });
  
  