function Result({aRecord,bRecord}){
   const currentA = aRecord[aRecord.length - 1];
   const currentB = bRecord[aRecord.length - 1];

   const aSum = aRecord.reduce((a,item) => a+item,0);
   const bSum = bRecord.reduce((b,item) => b+item, 0);


   let result01 = (currentA>currentB) ? "A팀 승리":
                  (currentA===currentB) ? "무승부" : "B팀 승리" ;

   let result02 = (aSum>bSum) ? "A팀 승 !" :
                  (bSum>aSum) ? "B팀 승 !" : "무승부" ;
  
 

  return(
    <dl>
      <dt>이번판 결과</dt>
      <dd>{result01}</dd>
      <dt>최종결과</dt>
      <dd>{result02}</dd>
    </dl>
  )
}

export default Result;