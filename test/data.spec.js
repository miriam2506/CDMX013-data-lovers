import { filterByDirector, filterByProducer, sortFilms, getAverageScore} from '../src/data.js';

describe('filterByDirector', () => {
  it('filter by Director Hayao Miyazaki', () => {
    let data=[
      {director:'Hayao Miyazaki'},
      {director:'Hiromasa Yonebayashi'}
    ];
  
    let director='Hayao Miyazaki'
  
    let expectedResult=[{director:'Hayao Miyazaki'}]
  
    let realResult=filterByDirector(data, director)
  
    expect(realResult).toEqual(expectedResult)
  });

});

describe('filterByProducer', () => {
  it('filtter by producer Isao Takahata', () => {

    let data=[
        {producer:'Isao Takahata'},
        {producer:'Hayao Miyazaki'}
      ];
  
      let producer='Isao Takahata';
      
      let expectedResult=[{producer:'Isao Takahata'}]
  
      let realResult=filterByProducer(data, producer)
  
      expect(realResult).toEqual(expectedResult)
    })
  });

  describe('sortFilms', () => {
    it('ascending Order', () => {
  
      let data=[
        {title:'Castle in the sky'},
        {title:'W'}];
    
        let sortTitleas='A to Z';
    
        let expectResult=[{title:'Castle in the sky'},{title:'W'}]
    
        let real=sortFilms(data, sortTitleas)
      
        expect(real).toStrictEqual(expectResult)
      });
  
      it('descending Order', () => {
  
        let data=[{title:'When marnie was there'},
            {title:'Castle in the sky'}];
      
          let sortTitledes='Z to A';
      
          let expectResult=[{title:'When marnie was there'},{title:'Castle in the sky'}];
      
          let realResult=sortFilms(data, sortTitledes)
      
          expect(realResult).toStrictEqual(expectResult)
        })
      }); 
  
      describe ("score", () =>{
        it ("average score", () =>{
      
          let data = [ {rt_score: "85"}, {rt_score: "75"}, {rt_score: "30"} ]
                 let result=Math.round((85+75+30) / data.length)
          expect (getAverageScore(data)).toStrictEqual(Number(result)+"%")
      
        })
      
      });
      