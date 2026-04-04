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

function Active_Nav() {
    var navLinks = document.querySelectorAll('nav a');
    console.log(navLinks);
    var activePage = window.location.href;
    navLinks.forEach(element => {
        if (element.href === activePage) {
            element.classList.add("active");
        }
    });
}

Active_Nav();

$("#readLess").hide(); 
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); 
    $("#readLess").hide();  
    $("#readMore").show();  

  });
  

  $("#readMore").click(function(){
    $("#longIntro").show();  
    $("#readLess").show();   
    $("#readMore").hide();   
  });

function showForm(date) {
    var form = document.getElementById("purchaseForm");
    var selectedDate = document.getElementById("selectedDate");
    selectedDate.value = date;
    form.style.display = "block";
}

function updatePrice() {
    var ticketType = document.getElementById("ticketType").value;
    var quantity = document.getElementById("quantity").value;
    var price = 0;
    if (ticketType === "adult") {
        price = 18 * quantity;

    }
    else if (ticketType === "student") {
        price = 10 * quantity;
    }
    else if (ticketType === "member") {
        price = 15 * quantity;
    }
    document.getElementById("price").value = price;
}


const ticketForm = document.getElementById("purchaseForm");
if (ticketForm) {
    ticketForm.addEventListener("submit", function(event) {
        event.preventDefault();

        
        event.preventDefault();
        updatePrice();
        const price = document.getElementById("price").value;
        localStorage.setItem("totalPrice", price);

        window.location.href = "checkoutconfirmation.html";

    });
}

let slides = null;
let slideIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    slides = document.querySelectorAll('.slide');
    slideIndex = 0;
    
    console.log('JS loaded, slides found:', slides.length);

    if (slides.length > 0) {
        slides[slideIndex].classList.add('active');
    }
});

function changeSlide(n) {
    if (!slides || slides.length === 0) return;
    
    slides[slideIndex].classList.remove('active');
    
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    
    slides[slideIndex].classList.add('active');
}

function toggleMenu() {
    var navLinks = document.querySelector('.nav_bar');
    navLinks.classList.toggle('responsive');
}

// Initialize Leaflet map only if Leaflet is loaded and the map element exists
if (document.getElementById('map')) {

    var map = L.map('map').setView([40.443, -79.9430], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([40.443, -79.9430]).addTo(map)
        .bindPopup('MonoMuse Location')
        .openPopup();
    
}
