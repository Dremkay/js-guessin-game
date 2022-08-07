const randomNumber = 7


document.querySelector("#btn1").addEventListener('click',guess)
document.querySelector("#btn2").addEventListener('click',clear)
const success = document.querySelector(".success")
const failed = document.querySelector(".failed")


function guess() {
    const userInput = Number(document.querySelector("#userInput").value)
    console.log(`Type: ${typeof userInput}, User guessed: ${userInput}`)
    if (userInput != randomNumber){
        success.innerHTML=''
        if (userInput < randomNumber && userInput!=0){
            failed.innerHTML = 'Wrong!, too <span id="low-high">low</span>'
        }else if(userInput === 0){
            failed.innerHTML = 'Please!, enter a valid number!'
        }else{
            failed.innerHTML = 'Wrong!, too <span id="low-high">high</span>'
        }
        console.log("wrong!")
    }else{
        failed.innerHTML =''
        success.innerHTML = `Congratulations, you guessed ${randomNumber} correctly.!`
        console.log("Congrats!")
    }
}

function clear(){
    success.innerHTML =''
    failed.innerHTML =''
    document.querySelector("#userInput").value =''
}

// const Game =()=>{

