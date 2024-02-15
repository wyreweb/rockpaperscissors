let rock=document.querySelector('.rock')
let scissors=document.querySelector('.scissors')
let paper=document.querySelector('.paper')
let scoreNum=document.querySelector('.scoreNum')
let score=0
scoreNum.innerHTML=score
let handStatus=document.querySelector('.status')
let choice=document.querySelector('.choice')
let result=document.querySelector('.result')
let you=document.querySelector('.You')
let ai=document.querySelector('.AI')
let playAgain=document.querySelector('.repeat')
const values=['rock','paper','scissors']
let randomValue

const pickRandom=()=>{
let randomIndex = Math.floor(Math.random() * values.length);
randomValue = values[randomIndex]
console.log(randomValue)
}
rock.onclick=()=>{
    pickRandom()
    choice.style.display='none'
    result.style.display='block'
    you.innerHTML='<h2>You Picked</h2><img src="./images/icon-rock.svg" alt="">'
    if(randomValue===rock.value){
        ai.innerHTML='<h2>The House Picked</h2><img src="./images/icon-rock.svg" alt="">'
        handStatus.innerHTML= "it's a tie"
    }else if (randomValue==='scissors') {
        ai.innerHTML='<h2>The House Picked</h2><img src="./images/icon-scissors.svg" alt="">'
        handStatus.innerHTML='you win'
        score++
        scoreNum.innerHTML=score
    }else {
        ai.innerHTML='<h2>The House Picked</h2><img src="./images/icon-paper.svg" alt="">'
        handStatus.innerHTML='you lose'
    }
}
scissors.onclick=()=>{
    pickRandom()
    choice.style.display='none'
    result.style.display='block'
    you.innerHTML='<h2>You Picked</h2><img src="./images/icon-scissors.svg" alt="">'
    if(randomValue===scissors.value){
        console.log("it's a tie")
    }else if (randomValue==='paper') {
        ai.innerHTML='<h2>The House Picked</h2><img src="./images/icon-paper.svg" alt="">'
        handStatus.innerHTML='you win'
        score++
        scoreNum.innerHTML=score
    }else {
        ai.innerHTML='<h2>The House Picked</h2><img src="./images/icon-rock.svg" alt="">'
        handStatus.innerHTML='you lose'
    }
}
paper.onclick=()=>{
    pickRandom()
    choice.style.display='none'
    result.style.display='block'
    you.innerHTML='<h2>You Picked</h2><img src="./images/icon-paper.svg" alt="">'
    if(randomValue===paper.value){
        ai.innerHTML='<h2>The House Picked</h2><img src="./images/icon-paper.svg" alt="">'
        handStatus.innerHTML="it's a tie"
    }else if (randomValue==='scissors') {
        ai.innerHTML='<h2>The House Picked</h2><img src="./images/icon-scissors.svg" alt="">'
        handStatus.innerHTML='you lose'
    }else {
        ai.innerHTML='<h2>The House Picked</h2><img src="./images/icon-rock.svg" alt="">'
        handStatus.innerHTML='you win'
        score++
        scoreNum.innerHTML=score
    }
}
playAgain.onclick=()=>{
    choice.style.display='block'
    result.style.display='none'
}
