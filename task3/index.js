// Задание 3
// 1
let arr = ['js', 'css', 'html'];

alert(arr[0]);

// 2

let arr2 = [0, 1, false, 2, undefined, '', 3, null];
alert(arr2.filter(el=>el));

// Задание 4

let arr3 = [[1,2], [1,2,3], [1,2,3,4]];

for (i=0; i<arr3.length; i++){
    if (arr3[i].length > 3) {
        alert(arr3[i])
    } 
}

