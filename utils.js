import { guess } from './app.js'
const deactivateBtn1 = () =>{
    btn1.removeEventListener('click', guess)
    btn1.style.background = 'rgb(227, 236, 245)'
    btn1.style.color = 'rgb(227, 236, 245)'
    btn1.style.borderStyle = 'none'
}

const activateBtn1 = () => {
    btn1.addEventListener('click', guess)
    btn1.style.removeProperty('background')
    btn1.style.removeProperty('color')
    btn1.style.removeProperty('borderStyle')
}

export { deactivateBtn1, activateBtn1 };