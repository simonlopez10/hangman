//VARIABLES GLOBALES
var arrayAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var animalsWords = ['COCKATOO', 'OWL', 'CAT', 'DOG', 'SEAL', 'PARROT', 'ELEPHANT', 'DOLPHIN', 'LION', 'TIGER', 'WHALE', 'MOLE', 'CAMEL', 'DINOSAUR', 'BIRD']
var countriesWords = ['EGYPT','ITALY','RUSSIA','GERMANY','JAMAICA', 'CHINA', 'AUSTRALIA', 'COLOMBIA', 'ARGENTINA', 'BRASIL', 'MEXICO', 'SWITZERLAND', 'NIGERIA', 'BOLIVIA', 'UGANDA']
var sportsWords = ['JUDO','CYCLING','SQUASH','RUGBY','KARATE','FOOTBALL', 'SOCCER', 'BASEBALL', 'VOLLEYBALL', 'TENNIS', 'BASKETBALL', 'GOLF', 'POLO', 'RUNNING', 'SUMO' ]
let categoryArray = []
let wordContainer = document.getElementById('word-container')
let randomWord = ''


function startingState() {
    //Oculta las categorias, las imagenes del resultado: Ganador (you win) o perdedor (you lose y la cuerda del
    //background), junto con las partes del 'ahorcado', ademas, llama a la función de generación
    //del teclado

    // Imagenes del resultado - ganó o perdió
    let backgroundImg = document.getElementsByTagName('body')[0]
    backgroundImg.style.backgroundImage = 'none'

    let youWinImg = document.getElementById('you-win-img')
    youWinImg.style.display = 'none'

    let youLoseImg = document.getElementById('you-lose-img')
    youLoseImg.style.display = 'none'

    // Partes del ahorcado de arriba hacia abajo
    let cuerda = document.getElementById('cuerda')
    cuerda.style.display = 'none'

    let cabeza = document.getElementById('cabeza')
    cabeza.style.display = 'none'

    let cuerpo = document.getElementById('cuerpo')
    cuerpo.style.display = 'none'

    let manoIzq = document.getElementById('mano-izq')
    manoIzq.style.display = 'none'

    let manoDer = document.getElementById('mano-der')
    manoDer.style.display = 'none'

    let pieIzq = document.getElementById('pie-izq')
    pieIzq.style.display = 'none'

    let pieDer = document.getElementById('pie-der')
    pieDer.style.display = 'none'

    // Botones de reinicio del juego
    let restartRight = document.getElementById('right-button-restart')
    restartRight.style.display = 'none'

    let restartleft = document.getElementById('left-button-restart')
    restartleft.style.display = 'none'

    // Mensaje reinicio del juego
    let restartMessageL = document.getElementById('play-again-message-left')
    restartMessageL.style.display = 'none'

    let restartMessageR = document.getElementById('play-again-message-right')
    restartMessageR.style.display = 'none'

    createKeyboard()
}


function createKeyboard() {

    // Crea un teclado a partir de un array creado usando el metodo split al string alphabet

    let keyboardFrame = document.getElementById('keyboard-frame');

    for (i = 0; i < arrayAlphabet.length; i++) {
        keyboardFrame.innerHTML += '<div class="letter-container" id="letter-' + arrayAlphabet[i] + '">' + arrayAlphabet[i] + '</div>';
    }

    selectedCategory()
}


function selectedCategory() {
    // Valida que categoria fue seleccionada y le avisa al usuario con un alert y un
    //cambio en el estilo del label
    let labelAnimals = document.getElementById('animals-label')
    let labelCountries = document.getElementById('countries-label')
    let labelSports = document.getElementById('sports-label')

    labelAnimals.addEventListener('click', function () {
        wordContainer.innerHTML = ''
        labelAnimals.style.color = 'green'
        labelCountries.style.display = 'none'
        labelSports.style.display = 'none'
        categoryArray = animalsWords
        alert('You have selected Animals! 🐶🐱🐦')
        selectRandomWord(categoryArray)
    })

    labelCountries.addEventListener('click', function () {
        wordContainer.innerHTML = ''
        labelAnimals.style.display = 'none'
        labelCountries.style.color = 'green'
        labelSports.style.display = 'none'
        categoryArray = countriesWords
        alert('You have selected Countries! 🗺🌎🌍')
        selectRandomWord(categoryArray)
    })

    labelSports.addEventListener('click', function () {
        wordContainer.innerHTML = ''
        labelAnimals.style.display = 'none'
        labelCountries.style.display = 'none'
        labelSports.style.color = 'green'
        categoryArray = sportsWords
        alert('You have selected Sports! ⚽🎾🏀')
        selectRandomWord(categoryArray)
    })
}


function selectRandomWord(selectedCategoryArray) {
    //Selecciona una palabra de manera aleatoria del array de la categoria seleccionada y genera un
    //array compuesto por las letras de dicha palabra
    randomWord = selectedCategoryArray[Math.floor(Math.random() * selectedCategoryArray.length)];
    createEmptySpacesWord(randomWord)
    return randomWord
}


function createEmptySpacesWord(word) {
    //Crea los espacios en blanco (span) por cada letra de la palabra seleccionada al azar
    for (i = 0; i < word.length; i++) {
        wordContainer.innerHTML += '<span></span>'
    }

    let CategoryContainer = document.getElementById('inputs-category')
    CategoryContainer.style.pointerEvents = 'none'

    getEventKeyboard()
}


function getEventKeyboard() {
    // Genera un evento cada que se le da click a cualquiera de las letras del teclado virtual
    for (i = 0; i < arrayAlphabet.length; i++) {
        let capturedLetter = document.getElementById('letter-' + arrayAlphabet[i] + '')
        capturedLetter.addEventListener('click', getLetterKeyboardAndCompare)
    }
}

const numberOfAttemps = 7;
let isOk = 0
let isNotOk = 0

function getLetterKeyboardAndCompare(event) {
    // identifica la letra clickeada y la muestra en console log
    let capturedLetter = event.target                // Sirve para caputar el evento clic sobre cada tecla
    capturedLetter.style.pointerEvents = 'none'      // Sirve para capturar la letra solo una vez
    let clickedLetter = capturedLetter.innerHTML     // Caputra el inner html de cada tecla
    console.log(clickedLetter)

    if (randomWord.includes(clickedLetter)) {                   // Si la letra clickeada está
        capturedLetter.style.backgroundColor = 'lightgreen'     // Color verde en teclado

        for (i = 0; i < randomWord.length; i++) {               // Compara letra clickeada con cada letra de la palabra
            if (randomWord[i] == clickedLetter) {               // Si la letra clickeada es igual a la letra en la palabra[i]
                isOk += 1                                       // Cuenta cada vez que hay coincidencia de clickeada con letra en palabra
                let spanLetter = document.getElementsByTagName('span')[i]  // Encuentra posición de la letra
                spanLetter.innerHTML = randomWord[i]                       // Escribe la letra clickeada en la coincidencia de la letra de la palabra
            }
        }

        if (isOk == randomWord.length) {                        // Si el conteo de letras acertadas es igual al tamaño de la palabra lleva a función ganar!
            youWin()
        }

    } else {
        capturedLetter.style.backgroundColor = 'lightcoral'     // Si la letra no esta en la palabra, pone color rojo
        isNotOk += 1                                            // Cuenta las veces que una letra no está en la palabra
        if (isNotOk <= 7) {                                     // Si los errores son menores o iguales a 7 lleva a funcion pierde para ir dibujando el ahorcado
            youLose()
        }
    }
}


function youWin() {

    // Si se gana el juego, muestra una imagen con la palabra tu ganas y muestra el botón de reinicio
    let youWinImg = document.getElementById('you-win-img')
    youWinImg.style.display = 'block'
    let restartleft = document.getElementById('left-button-restart')
    restartleft.style.display = 'block'

    document.getElementById('keyboard-frame').style.display = 'none'
    document.getElementById("keyboard-to-play").style.display = 'none'
    document.getElementById('play-again-message-left').style.display = 'block'


    restartleft.addEventListener('click', playAgain)
}


function youLose() {

    // Si se pierde el juego, muestra una imagen con la palabra tu pierdes, un fondo con una cuerda de ahorcado y muestra el botón de reinicio 

    console.log(isNotOk)
    let cuerda = document.getElementById('cuerda')
    let cabeza = document.getElementById('cabeza')
    let cuerpo = document.getElementById('cuerpo')
    let manoIzq = document.getElementById('mano-izq')
    let manoDer = document.getElementById('mano-der')
    let pieIzq = document.getElementById('pie-izq')
    let pieDer = document.getElementById('pie-der')
    let youLoseImg = document.getElementById('you-lose-img')
    let backgroundImg = document.getElementsByTagName('body')[0]

    //Según el conteo de teclas erradas, dibuja desde la cuerda, hasta todas las partes del cuerpo (7 intentos)
    switch (isNotOk) {
        case 1:
            cuerda.style.display = 'block'
            break;
        case 2:
            cabeza.style.display = 'block'
            break;
        case 3:
            cuerpo.style.display = 'block'
            break;
        case 4:
            manoIzq.style.display = 'block'
            break;
        case 5:
            manoDer.style.display = 'block'
            break;
        case 6:
            pieIzq.style.display = 'block'
            break;
        case 7:
            pieDer.style.display = 'block'
            backgroundImg.style.backgroundImage = ''
            youLoseImg.style.display = 'block'
            let restartRight = document.getElementById('right-button-restart')
            restartRight.style.display = 'block'

            document.getElementById('keyboard-frame').style.display = 'none'
            document.getElementById("keyboard-to-play").style.display = 'none'
            document.getElementById('play-again-message-right').style.display = 'block'

            restartRight.addEventListener('click', playAgain)
            break;
    }
}


function playAgain() {
    //Sirve para recargar la pagina cuando se presiona cualquiera de los botones de reinicio
    window.location.reload(true)
}

window.addEventListener('load', startingState)