let body = document.getElementsByTagName('body')[0]
let container = document.getElementsByClassName('container')[0]
let colorText = document.getElementsByClassName('color-text')[0]

let arr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]

function getGradient() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * arr.length)
        color += arr[randomNumber]
    }
    return color
}

function setGradient() {
    const color1 = getGradient()
    const color2 = getGradient()
    const randomDeg = Math.floor(Math.random() * 360)
    const bgColor = `linear-gradient(
        ${randomDeg}deg,
        ${color1},
        ${color2}
    )`
    body.style.background = bgColor
    colorText.innerHTML = bgColor
    return
}

setGradient()

function clicked() {
    setGradient()
    return
}