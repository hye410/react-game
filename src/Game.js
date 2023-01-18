import Card from './Card';

function Game({name,color,record}){
  const num = record[record.length - 1];
  const sum = record.reduce((hap,item) => 
    hap + item ,0);
return(
  <>
  <h1>{name}</h1>
  <Card 
  color={color}
  num={num}
  />
  <dl>
    <dt>합계</dt>
    <dd>{sum}</dd>
    <dt>기록</dt>
    <dd>{record.join(' / ')}</dd>
  </dl>
  </>
)
}

export default Game;