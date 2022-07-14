const importantMessage = "Обязательное поле";
const phoneMessage = "Введите номер мобильного телефона в формате<br>+7(910)1234567. Не указывайте городской номер";
const incorrectLang = "Это значение некорректно";
const errorColor = "rgb(192, 17, 17)";
const correctColor = "rgba(0, 128, 0, 0.876)";


const button = document.querySelector(".register__button");
button.addEventListener("click", checkInput);

// вывод ошибки на незаполненное поле
function errorMessage(input, msg) {
    document.querySelector(input).style.color = errorColor;
    document.querySelector(msg).innerHTML = importantMessage;
}

// проверка заполненности полей и приветствие
function checkInput() {
    let surname = document.querySelector('.input1').value;
    if (surname == '') {
        errorMessage('.surname', '.mandatory1');
    }
    let name = document.querySelector('.input2').value;
    if (name == '') {
        errorMessage('.name', '.mandatory2');
    }
    let email = document.querySelector('.input3').value;
    if (email == '') {
        errorMessage('.email', '.mandatory3');
    }
    let phone = document.querySelector('.input4').value;
    if (phone == '') {
        errorMessage('.phone', '.mandatory4');
    }
    let password1 = document.querySelector('.input5').value;
    if (password1 == '') {
        errorMessage('.password1', '.mandatory5');
    }
    let password2 = document.querySelector('.input6').value;
    if (password2 == '') {
        errorMessage('.password2', '.mandatory6');
    }
    if (surname !== '' && name !== '' && email !== '' && phone !== '' && password1 !== '' && password2 !== '') {
        document.querySelector('.welcome').innerHTML = (`Добро пожаловать, ${name}!`);
    }
}

// проверка на ввод обязательных полей
function InputProvided(input, clear) {
    document.querySelector(input).style.color = correctColor;
    document.querySelector(clear).innerHTML = "";
}

const inputSurname = document.querySelector('.input1');
inputSurname.addEventListener("keyup", function() {
    InputProvided('.surname', '.mandatory1');
});
inputSurname.addEventListener("keyup", wrongSurnameInput);

const inputName = document.querySelector('.input2');
inputName.addEventListener("keyup", function() {
    InputProvided('.name', '.mandatory2');
});
inputName.addEventListener("keyup", wrongNameInput);

const inputEmail = document.querySelector('.input3');
inputEmail.addEventListener("keyup", function() {
    InputProvided('.email', '.mandatory3');
});

const inputPhone = document.querySelector('.input4');
inputPhone.addEventListener("keyup", function() {
    InputProvided('.phone', '.mandatory4');
});

const inputPassword1 = document.querySelector('.input5');
inputPassword1.addEventListener("keyup", function() {
    InputProvided('.password1', '.mandatory5');
});

const inputPassword2 = document.querySelector('.input6');
inputPassword2.addEventListener("keyup", function() {
    InputProvided('.password2', '.mandatory6');
});
inputPassword2.addEventListener("keyup", passwordValidation);

// проверка на совпадение паролей 
function passwordValidation() {
    if (inputPassword1.value !== inputPassword2.value) {
        document.querySelector('.mandatory6').innerHTML = "Пароль не совпадает"; 
    }
    else { 
        document.querySelector('.mandatory6').innerHTML = "";
    }
}    

// проверка на киррилицу
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
