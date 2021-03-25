var imgBox = document.querySelector('#imgbox');
var imgAdd = document.querySelector('#imgadd');

var tOne = document.querySelector('#tone');
var tTwo = document.querySelector('#ttwo');
var tThree = document.querySelector('#tthree');
var tFour = document.querySelector('#tfour');
var tFive = document.querySelector('#tfive');
var tSix = document.querySelector('#tsix');

tOne.addEventListener('click', function(){
    imgAdd.style.backgroundImage = 'url(pic1.jpg)';
})

tTwo.addEventListener('click', function(){
    imgAdd.style.backgroundImage = 'url(pic2.jpg)';
})

tThree.addEventListener('click', function(){
    imgAdd.style.backgroundImage = 'url(pic3.jfif)';
})

tFour.addEventListener('click', function(){
    imgAdd.style.backgroundImage = 'url(pic4.jpeg)';
})

tFive.addEventListener('click', function(){
    imgAdd.style.backgroundImage = 'url(pic5.jpg)';
})

tSix.addEventListener('click', function(){
    imgAdd.style.backgroundImage = 'url(pic6.jpg)';
})