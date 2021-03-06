"use strict"

$(document).ready(function(){
    
    let options = {threshold: [1]};
    let observer = new IntersectionObserver(onEntry, options);
     let elements = $('.fotka');
    elements.each((i, el) => {
        observer.observe(el);
    });
    
    function onEntry (entry){
        entry.forEach(change => {
           if(change.isIntersecting){
              
                change.target.src = change.target.dataset.src;
           } 
        });
    }

    
$(window).scroll( () => {
    let scrollDistance = $(window).scrollTop();
    
    $(".selection").each((i, el) => {
        if ($(el),offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if($(el).hasClass("active")){
                    $(el).removeClass("active");
            }
        });
            
            $('nav li:eq('+ i + ')').find('a').addClass('active');
    }
});
                 
});

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top -60 + "px"});
}); 
    });

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
    
});

//$(document).ready(function() {
//var number = document.querySelector('.number'),
//		numberTop = number.getBoundingClientRect().top,
//		start = +number.innerHTML, end = +number.dataset.max;
//
//		window.addEventListener('scroll', function onScroll() {
//			if(window.pageYOffset > numberTop - window.innerHeight / 2) {
//				this.removeEventListener('scroll', onScroll);
//				var interval = setInterval(function() {
//					number.innerHTML = ++start;
//					if(start == end) {
//						clearInterval(interval);
//					}
//				}, 5);
//			}
//		});
//
//});

function outNum(num, elem){
    
const time = 3000;
const steps = 20;

    let el = document.querySelector('#' + elem);
    let n = 0;
    let s = (num/steps);
    
    let interval = setInterval(() =>{
        n = n + s;
        if(n >= num){
            n = num;
        
        clearInterval(interval);
        }
    
    el.innerHTML = Math.floor(n).toLocaleString("en-En");
}, time/steps);
}

$(document).ready([outNum(120, 'out-1'), outNum(4600, 'out-2'), outNum(340, 'out-3'), outNum(23, 'out-4')]);


let arr_tip = ["1-?????????????? " , "2-???????????????? ?????????????? ", "3-???????????? ",];
let tipSaita = prompt('?????????? ?????? ?????????? ?????? ??????????? ?????????? ?????????? ????????????.', arr_tip);

console.log(tipSaita);

if(tipSaita == 3){
    
    var tipDrugoi = prompt('???? ?????????????? ?????????? ????????????, ???????????????? ?????????????????????? ?????? ??????????.', );
   
  console.log(tipSaita);
  console.log(tipDrugoi);  
}
console.log(tipSaita);

let srok_tip;
let price_tip;

if (tipSaita == 1){
    srok_tip = 2;
    price_tip = 5000;
}

if (tipSaita == 2){
    srok_tip = 5;
    price_tip = 25000;
}

if (tipSaita == 3){
    srok_tip = "?????? ???? ?????????? ????";
}

let arr_design = ["1-?????????????? " , "2-?????? ????????????, ?? ???? ???????? ", "3-?? ?????? ??????? ",];
let design = prompt('?????????? ???????????? ?????????? ?????? ??????????? ?????????? ?????????? ????????????.', arr_design);

console.log(design);

let arr_adaptivnost = ["1-?????? ?????????????????? ?? ??????????????????" , "2-?????? ????", "3-?? ?????? ?????????????????? ?? ?????? ????", "4-???? ?? ?????? ???? ???????? ???????? ?????????????????? =?"];
let adaptivnost = prompt('?????? ?????????? ?????????????????? (?????????????? ??????????????????)  ?????? ?????????? ????????? ?????????? ?????????? ????????????.', arr_adaptivnost);

console.log(adaptivnost);

let srok_adaptivnost;
let price_adaptivnost;

if (adaptivnost == 1){
    srok_adaptivnost = 4;
    price_adaptivnost = 3000;
}

if (adaptivnost == 2){
    srok_adaptivnost = 3;
    price_adaptivnost = 2000;
}

if (adaptivnost == 3){
    srok_adaptivnost = 6;
    price_adaptivnost = 5000;
}

if (adaptivnost == 4){
    srok_adaptivnost = "?????? ???? ?????????? ????";
}

let sroki = srok_tip + srok_adaptivnost + " ????????";
let price = price_tip + price_adaptivnost;

if (tipSaita == 3 || adaptivnost == 4){
    alert("?????????? ?????????????????? ????");
}
else{
    alert("???????? ?? ?????????????? ????????: " + sroki);
    alert("?????????????????????????????? ??????????????????: " + price + " ????????????");
}

function outChoiceSroki(t, element){
let i = document.querySelector('#' + element);
    t = sroki;
i.innerHTML = t;
}

outChoiceSroki(sroki, 'outSroki');


