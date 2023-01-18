//data
const images = {
  blue : ['blue_1','blue_2','blue_3','blue_4','blue_5','blue_6','blue_7','blue_8','blue_9'],
  red : ['red_1','red_2','red_3','red_4','red_5','red_6','red_7','red_8','red_9']
}

function Card({color,num=1}){
  const cardImg = images[color][num -1];
return(
  <img src={`./pic/${cardImg}.png`} alt={cardImg}/>
)
}

export default Card;