import './styles.scss'
import img from './matrix.png'  

function titleComponent(){
    const elmH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello world'
    elemH1.classList.add('title')
    return elemH1
}

function imgComponent(){
    const elemImg = new Image(1200,800)
    elemImg.src = img
    return img
}

document.body.appendChild(component())
document.body.appendChild(component())