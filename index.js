const importantMessage = "Обязательное поле";
const phoneMessage = "Введите номер мобильного телефона в формате<br>+7(910)1234567. Не указывайте городской номер";
const incorrectLang = "Это значение некорректно";
const errorColor = "rgb(192, 17, 17)";
const correctColor = "rgba(0, 128, 0, 0.876)";


const button = document.querySelector(".register__button");
button.addEventListener("click", checkInput);

function checkInput() {
    let surname = document.querySelector('.input1').value;
    if (surname == '') {
        document.querySelector('.surname').style.color = errorColor;
        document.querySelector('.mandatory1').innerHTML = importantMessage;
    }
    let name = document.querySelector('.input2').value;
    if (name == '') {
        document.querySelector('.name').style.color = errorColor;
        document.querySelector('.mandatory2').innerHTML = importantMessage;
    }
    let email = document.querySelector('.input3').value;
    if (email == '') {
        document.querySelector('.email').style.color = errorColor;
        document.querySelector('.mandatory3').innerHTML = importantMessage;
    }
    let phone = document.querySelector('.input4').value;
    if (phone == '') {
        document.querySelector('.phone').style.color = errorColor;
        document.querySelector('.mandatory4').innerHTML = phoneMessage;
    }
    let password1 = document.querySelector('.input5').value;
    if (password1 == '') {
        document.querySelector('.password1').style.color = errorColor;
        document.querySelector('.mandatory5').innerHTML = importantMessage;
    }
    let password2 = document.querySelector('.input6').value;
    if (password2 == '') {
        document.querySelector('.password2').style.color = errorColor;
        document.querySelector('.mandatory6').innerHTML = "Пароль не совпадает";
    }
    if (surname !== '' && name !== '' && email !== '' && phone !== '' && password1 !== '' && password2 !== '') {
        document.querySelector('.welcome').innerHTML = (`Добро пожаловать, ${name}!`);
    }
}

const inputSurname = document.querySelector('.input1');
inputSurname.addEventListener("keyup", surnameProvided);
inputSurname.addEventListener("keyup", wrongSurnameInput);
function surnameProvided() {
    document.querySelector('.surname').style.color = correctColor;
    document.querySelector('.mandatory1').innerHTML = "";
}

const inputName = document.querySelector('.input2');
inputName.addEventListener("keyup", nameProvided);
inputName.addEventListener("keyup", wrongNameInput);
function nameProvided() {
    document.querySelector('.name').style.color = correctColor;
    document.querySelector('.mandatory2').innerHTML = "";
}

const inputEmail = document.querySelector('.input3');
inputEmail.addEventListener("keyup", emailProvided);
function emailProvided() {
    document.querySelector('.email').style.color = correctColor;
    document.querySelector('.mandatory3').innerHTML = "";
}

const inputPhone = document.querySelector('.input4');
inputPhone.addEventListener("keyup", phoneProvided);
function phoneProvided() {
    document.querySelector('.phone').style.color = correctColor;
    document.querySelector('.mandatory4').innerHTML = "";
}  

const inputPassword1 = document.querySelector('.input5');
inputPassword1.addEventListener("keyup", password1Provided);
function password1Provided() {
    document.querySelector('.password1').style.color = correctColor;
    document.querySelector('.mandatory5').innerHTML = "";
}

const inputPassword2 = document.querySelector('.input6');
inputPassword2.addEventListener("keyup", password2Provided);
inputPassword2.addEventListener("keyup", passwordValidation);
function password2Provided() {
    document.querySelector('.password2').style.color = correctColor;
    document.querySelector('.mandatory6').innerHTML = "";
}

// проверка на совпадение паролей 
function passwordValidation() {
    if (inputPassword1.value !== inputPassword2.value) {
        document.querySelector('.mandatory6').innerHTML = "Пароль не совпадает"; 
    }
    else { 
        document.querySelector('.mandatory6').innerHTML = "";
    }
}    

// проверка на киррилицу фамилии и имени
function wrongSurnameInput() {
    let englishLetters = /[a-z', 'A-Z', 'A-z']/; 
    if (englishLetters.test(this.value)) {
        document.querySelector('.surname').style.color = errorColor;
        document.querySelector('.mandatory1').innerHTML = incorrectLang;
    }
} 
function wrongNameInput() {
    let englishLetters = /[a-z', 'A-Z', 'A-z']/; 
    if (englishLetters.test(this.value)) {
        document.querySelector('.name').style.color = errorColor;
        document.querySelector('.mandatory2').innerHTML = incorrectLang;
    }
} 
