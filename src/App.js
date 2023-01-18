import { useState } from 'react';
import Button from './Button';
import Game from './Game';
import Result from './Result';
import './App.css';

function App(){
// const[record,setRecord] = useState([]);
const[aRecord,setARecord] = useState([]);
const[bRecord,setBRecord] = useState([]);

  function random(n){
    return(
      Math.ceil(Math.random()*n)
    )
  }


  function start(){
    const aNumber = random(9);
    const bNumber = random(9);

    setARecord([...aRecord,aNumber]);
    setBRecord([...bRecord,bNumber]);

}



  function reset(){
    setARecord([]);
    setBRecord([]);
  }

  return(
    <div id="box">
      <div id="game">
        <div className="gameA">
        <Game 
        name = "A팀"
        color = "blue"
        record = {aRecord}
        />
        </div>
        <div className="gameB">
        <Game 
        name ="B팀"
        color ="red"
        record ={bRecord}
        />
        </div>

        <div className="result">
          <Result 
          aRecord = {aRecord}
          bRecord = {bRecord}
          />
        </div>
      </div>

      <div id="btn">
        <Button 
        btnName = "시작"
        onClick={start}/>
        <Button 
        btnName = "초기화"
        onClick={reset}/>
      </div>
    </div>
  )
}

export default App;