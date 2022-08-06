const randomNumber = 7

const clear =()=> {
    success.innerHTML =''
    failed.innerHTML =''
    document.querySelector("#userInput").value =''

    console.log('claer!')
}

document.querySelector("#btn1").addEventListener('click',guess)
document.querySelector("#btn2").addEventListener('click',clear)
const success = document.querySelector(".success")
const failed = document.querySelector(".failed")





function guess() {
    const userInput = Number(document.querySelector("#userInput").value)
    console.log(`Type: ${typeof userInput}, User guessed: ${userInput}`)
    if (userInput != randomNumber){
        success.innerHTML=''
        failed.innerHTML = 'Wrong!, too <span id="low-high">low</span>'
        console.log("wrong!")
    }else{
        failed.innerHTML =''
        success.innerHTML = 'Congratulations!'
        console.log("Congrats!")
    }
}
// const Game =()=>{

