function sumInput() {
let array = [];

let sum = 0;

for (let index = 0; index < Infinity; index++) {
    array.push(+prompt('Введите число'));
    if (!array[index]) {
        break;
    }
    else {sum += array[index];}
}
array.sort(function sortNumbers (a,b){
    return a-b})
    
console.log(array);
console.log(sum);
alert(`Сумма равна ${sum}`);
}

sumInput();