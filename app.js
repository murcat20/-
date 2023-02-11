function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
    }
    function randomColor() {
    // Задаем значения для трех цветов
    let red = prompt('Красный цвет от 0 до 255')
    let green = prompt('Зелёный цвет от 0 до 255')
    let blue = prompt('Синий цвет от 0 до 255')
    document.getElementById('body').style.background = `rgb(${red}, ${green}, ${blue})`
    }