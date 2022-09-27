//VARIABLES GLOBALES
var arrayAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var categories = ['animals', 'countries', 'sports']
var animalsWords = ['COCKATOO', 'OWL', 'CAT', 'DOG', 'SEAL', 'PARROT', 'ELEPHANT']
var countriesWords = ['COLOMBIA', 'ARGENTINA', 'BRASIL', 'MEXICO', 'SWITZERLAND', 'NIGERIA', 'BOLIVIA']
var sportsWords = ['FOOTBALL', 'SOCCER', 'BASEBALL', 'VOLLEYBALL', 'TENNIS', 'BASKETBALL', 'GOLF']
let categoryArray = []
let wordContainer = document.getElementById('word-container')
let spansletters = []



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

    createKeyboard()
    getEventKeyboard()
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
    // Valida que categoria fue seleccionada y le avisa ak usuario con un alert y un
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
        showCategoryAgain()
    })

    labelCountries.addEventListener('click', function () {
        wordContainer.innerHTML = ''
        labelAnimals.style.display = 'none'
        labelCountries.style.color = 'green'
        labelSports.style.display = 'none'
        categoryArray = countriesWords
        alert('You have selected Countries! 🗺🌎🌍')
        selectRandomWord(categoryArray)
        showCategoryAgain()
    })

    labelSports.addEventListener('click', function () {
        wordContainer.innerHTML = ''
        labelAnimals.style.display = 'none'
        labelCountries.style.display = 'none'
        labelSports.style.color = 'green'
        categoryArray = sportsWords
        alert('You have selected Sports! ⚽🎾🏀')
        selectRandomWord(categoryArray)
        showCategoryAgain()
    })
}

function showCategoryAgain() {
    // Sirve para mostrar nuevamente las categorias al presionar el titulo de seleccionar categoria
    //por si el usuario no esta contento con su elección

    let selectACategory = document.getElementById('select-a-category')
    let labelAnimals = document.getElementById('animals-label')
    let labelCountries = document.getElementById('countries-label')
    let labelSports = document.getElementById('sports-label')

    selectACategory.addEventListener('click', function() {
        labelAnimals.style.display = 'flex'
        labelCountries.style.display = 'flex'
        labelSports.style.display = 'flex'
        labelAnimals.style.color = ''
        labelCountries.style.color = ''
        labelSports.style.color = ''
    })

}

function selectRandomWord(selectedCategoryArray) {
    //Selecciona una palabra de manera aleatoria del array de la categoria seleccionada y genera un
    //array compuesto por las letras de dicha palabra
    let randomWord = selectedCategoryArray[Math.floor(Math.random() * selectedCategoryArray.length)];
    console.log(randomWord)
    createEmptySpacesWord(randomWord)
}

function createEmptySpacesWord (word){
    //Crea los espacios en blanco (span) por cada letra de la palabra seleccionada al azar
    for (i=0 ; i < word.length ;i++) {
        wordContainer.innerHTML += '<span class="letter" id="random-word-letter-' + word[i] + '">'+word[i] +'</span>'
    }
}

function getEventKeyboard () {
    // Genera un evente cada que se le da click a cualquiera de las letras del teclado virtual
    for (i=0 ; i < arrayAlphabet.length ; i++) {
        let capturedLetter = document.getElementById('letter-'+arrayAlphabet[i]+'')
        capturedLetter.addEventListener('click',getLetterKeyboardAndCompare)
    }
    //Esta función es llamada al iniciar o cargar la aplicación
}

function getLetterKeyboardAndCompare(event) {
    // identifica la letra clickeada y la muestra en console log
    let capturedLetter = event.target                // Sirve para caputar el evento clic sobre cada tecla
    capturedLetter.style.pointerEvents = 'none'     //  Sirve para capturar la letra solo una vez
    let clickedLetter = capturedLetter.innerHTML   //   Caputra el inner html de cada tecla
    console.log(clickedLetter)

    spansletters = document.getElementsByClassName('letter')
    console.log(spansletters)
   
    for (i=0; i<spansletters.length; i++){
        if (spansletters[i].innerHTML == clickedLetter) {
            console.log('la letra si está')  
        } else {
            console.log('la letra no está)')
        }
    }
}

function CompareLetterOnRandomWord () {
    //Compara las teclas clickeadas con el arreglo de la palabra aleatoria


}


window.addEventListener('load', startingState)