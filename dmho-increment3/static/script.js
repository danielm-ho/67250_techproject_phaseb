var x = 5;
var y = 7;
var z = x + y;
console.log(z);

console.log(document.getElementById("greeting"));

var A = 'Hello ';
var B = 'world!';
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log(x3);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
    if (C.length < z) {
        console.log(z);
    }
} else {
    console.log('good job!');
}

// L1 = ['Watermelon', 'Pineapple', 'Pear', 'Banana'];
// L2 = ['Apple', 'Banana', 'Kiwi', 'Orange'];

// function findTheBanana(list) {
//     for (var i = 0; i < list.length; i++) {
//         if (list[i] == 'Banana') {
//             window.alert('BANANA FOUND');
//             return;
//         }
//     }
// }

// function findTheBanana2(list) {
//     list.forEach(function(fruit) {
//         if (fruit == 'Banana') {
//             window.alert('BANANA FOUND');
//             return;
//         }
//     });
// }

// findTheBanana(L1);
// findTheBanana(L2);

// findTheBanana2(L1);
// findTheBanana2(L2);

var now = new Date();
console.log(now);

var hour = now.getHours();

function greeting(hour) {
    if (hour < 5 || hour >= 20) {
        document.getElementById('greeting').innerHTML = 'Good night!';
    } else if (hour < 12) {
        document.getElementById('greeting').innerHTML = 'Good morning!';
    } else if (hour < 18){
        document.getElementById('greeting').innerHTML = 'Good afternoon!';
    } else {
        document.getElementById('greeting').innerHTML = 'Good evening!';
    }
}

var greetingEl = document.getElementById('greeting');
if (greetingEl) {
    greeting(hour);
}

function addYear() {
    var year = document.getElementById('copyYear');
    if (year) {
        year.innerHTML = new Date().getFullYear();
    }
}

addYear();

