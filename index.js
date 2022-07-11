const importantMessage = "Обязательное поле";
const phoneMessage = "Введите номер мобильного телефона в формате<br>+7(910)1234567. Не указывайте городской номер";
const incorrectLang = "Это значение некорректно";
const errorColor = "rgb(192, 17, 17)";
const correctColor = "rgba(0, 128, 0, 0.876)";

function checkInput() {
    let surname = document.querySelector('.input1');
    if (surname.value == '') {
        document.querySelector('.surname').style.color = errorColor;
        document.querySelector('.mandatory1').innerHTML = importantMessage;
    }
    let name = document.querySelector('.input2');
    if (name.value == '') {
        document.querySelector('.name').style.color = errorColor;
        document.querySelector('.mandatory2').innerHTML = importantMessage;
    }
    let email = document.querySelector('.input3');
    if (email.value == '') {
        document.querySelector('.email').style.color = errorColor;
        document.querySelector('.mandatory3').innerHTML = importantMessage;
    }
    let phone = document.querySelector('.input4');
    if (phone.value == '') {
        document.querySelector('.phone').style.color = errorColor;
        document.querySelector('.mandatory4').innerHTML = phoneMessage;
    }
    let password1 = document.querySelector('.input5');
    if (password1.value == '') {
        document.querySelector('.password1').style.color = errorColor;
        document.querySelector('.mandatory5').innerHTML = importantMessage;
    }
    let password2 = document.querySelector('.input6');
    if (password2.value == '') {
        document.querySelector('.password2').style.color = errorColor;
        document.querySelector('.mandatory6').innerHTML = "Пароль не совпадает";
    }
    else {
        document.querySelector('.welcome').innerHTML = (`Добро пожаловать, ${name.value}!`);
    }
}
function surnameProvided() {
    document.querySelector('.surname').style.color = correctColor;
    document.querySelector('.mandatory1').innerHTML = "";
}
function nameProvided() {
    document.querySelector('.name').style.color = correctColor;
    document.querySelector('.mandatory2').innerHTML = "";
}
function emailProvided() {
    document.querySelector('.email').style.color = correctColor;
    document.querySelector('.mandatory3').innerHTML = "";
}
function phoneProvided() {
    document.querySelector('.phone').style.color = correctColor;
    document.querySelector('.mandatory4').innerHTML = "";
}  
function password1Provided() {
    document.querySelector('.password1').style.color = correctColor;
    document.querySelector('.mandatory5').innerHTML = "";
}
function password2Provided() {
    document.querySelector('.password2').style.color = correctColor;
    document.querySelector('.mandatory6').innerHTML = "";
}
// проверка на киррилицу
/* function wrongSymbols() {
    let englishLetters = /[a-z', 'A-Z', 'A-z']/; 
    if (englishLetters.test(this.value)) {
        document.querySelector('.mandatory1').innerHTML = incorrectLang;
    }
} */