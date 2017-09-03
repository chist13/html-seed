import PI from './parts/helperts'

const div = document.createElement('div')

div.style.position = 'absolute'
div.style.top = '5em'
div.style.left = '5em'

div.innerText = `PI = ${PI}. Js works`

document.body.append(div)