/*
 * POOP: Level Two
 *
 */

 //Set 10 shots for player to play

let shots = 0

const poopElement = document.querySelector('.poop-toilet')

const shotsElement = document.querySelector('.poop-shots')

 function levelTwo(){
    
     shots +=1;
     shotsElement.innerText = shots
     if(shots == 10){
         alert('So creepy!! click on level three if you got more than 5 poops!😱')
     } else if(shots >= 10){
        shots = 00;
        }
 }

 poopElement.addEventListener('click', levelTwo)

 ////Poop shows up once the player shots the right toilet

const toilet = document.getElementById('toilet2')
function image(){
    const img=document.createElement("img")
    img.src="images/poop2.png"
    img.id="mrpoop2"
    const poop = document.querySelector(".poop-toilet")
    poop.appendChild(img)
}
toilet.addEventListener('click', image)