const randomNumber = 7
let lives = 3

document.querySelector("#btn1").addEventListener('click',guess)
document.querySelector("#btn2").addEventListener('click',clear)
const success = document.querySelector(".success")
const failed = document.querySelector(".failed")
const life = document.querySelector("#lives")
life.innerHTML=`<h1>${lives}`


function guess() {
    if (lives!=0){
        const userInput = Number(document.querySelector("#userInput").value)
        console.log(`Type: ${typeof userInput}, User guessed: ${userInput}`)
        if (userInput != randomNumber){
            success.innerHTML=''
            if (userInput < randomNumber && userInput!=0){
                lives--
                life.innerHTML=`<h1>${lives}`
                failed.innerHTML = 'Wrong!, too <span id="low-high">low</span>'
            }else if(userInput === 0){
                failed.innerHTML = 'Please!, enter a valid number!'
            }else{
                lives--
                life.innerHTML=`<h1>${lives}`
                failed.innerHTML = 'Wrong!, too <span id="low-high">high</span>'
            }
            
        }else{
            failed.innerHTML =''
            lives--
            life.innerHTML=`<h1>${lives}`
            success.innerHTML = `Congratulations, you guessed ${randomNumber} correctly.!`
        }
    }else{
        failed.innerHTML = 'SORRY!, YOU HAVE EXHUSTED YOUR CHANCES! haha!'
        failed.innerHTML+=`<br/><br/> The answer is ${randomNumber}`
    }
    

}

function clear(){
    success.innerHTML =''
    failed.innerHTML =''
    document.querySelector("#userInput").value =''
}

// const Game =()=>{

