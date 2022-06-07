function calcCost(){

    let sum = 0;

    let arr = [];
    arr[0] = document.querySelector('#models').value;

    let complectation = document.querySelectorAll('[name="gridRadios"]');
    for (let i = 0; i < complectation.length; i++) {
    if (complectation[i].checked==true) {
        arr[1] = complectation[i].value;
    }
}

let extraOptions = document.querySelectorAll('.extraoption');
for (let i = 0; i < extraOptions.length; i++) {
    if (extraOptions[i].checked==true) {
        arr.push(extraOptions[i].value)
    }
}

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

document.querySelector('.result').innerHTML = `
Стоимость вашего автомобиля равна ${sum} долларов.`
document.querySelector('.error').innerHTML = "";

if (document.querySelector('#models').value=="none") {
    document.querySelector('.error').innerHTML = "Выберите модель автомобиля";
    document.querySelector('.result').innerHTML = "";
} 
}

document.querySelector('#btn-result').addEventListener('click', calcCost);