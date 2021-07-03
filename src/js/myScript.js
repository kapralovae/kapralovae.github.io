"use strict"

$(document).ready(function(){
    new WOW().init();
    
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

function onSelectionChange(selectObject) {
var value = selectObject.value;  
console.log(value);
}
    
        
    
$(window).scroll( () => {
    let scrollDistance = $(window).scrollTop();
    
    $(".section").each((i, el) => {
        if ($(el).offset().top - $("nav").outerHeight()  <= scrollDistance){
            $("nav a").each((i, el) => {
                if($(el).hasClass("active1")){
                    $(el).removeClass("active1");
            }
        });
            
            $('nav li:eq('+ i + ')').find('a').addClass('active1');
    }
});
                 
});

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top -60 + "px"});
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

let activation = false;
    
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
    
    
    let options1 = {threshold: [1]};
    let observer1 = new IntersectionObserver(onEntry1, options1);
     let elements1 = $('.out-num');
    elements1.each((i, el) => {
        observer1.observe(el);
    });
    
    
    function onEntry1 (entry){
        entry.forEach(change => {
           if(change.isIntersecting){
               if (!activation){
                  
            outNum(120, 'out-1');
            outNum(4600, 'out-2');
            outNum(340, 'out-3');
            outNum(23, 'out-4');
                   activation = true;
               }
        }
           
        });
        }
    

    
$("#inputPhone").mask("+7(999)-999-99-99");
$("#inputEmail3").inputmask("email");

$('form').submit(function (event){
    if ($("#inputPhone").val() == "" || $("#inputEmail3").val() == ""){
    event.preventDefault();
    alert("Введите данные")
}
});

    



//let arr_tip = ["1-Визитка " , "2-Интернет магазин ", "3-Другое ",];
//let tipSaita = prompt('Какой тип сайта Вам нужен? Ответ дайте цифрой.', arr_tip);
//
//console.log(tipSaita);
//
//if(tipSaita == 3){
//    
//    var tipDrugoi = alert('Вы выбрали ответ другое, для оценки стоимости пишите на почту.', );
//   
//  console.log(tipSaita);
//  console.log(tipDrugoi);  
//}
//console.log(tipSaita);
//
//let srok_tip;
//let price_tip;
//
//
//if (tipSaita == 1){
//    srok_tip = 2;
//    price_tip = 5000;
//    
//}
//
//if (tipSaita == 2){
//    srok_tip = 5;
//    price_tip = 25000;
//}
//
//if (tipSaita == 3){
//    srok_tip = "Несколько дней +";
//    price_tip = "Несколько рублей + ";
//}
//    if (tipSaita == 0 || tipSaita > 3){
//    srok_tip = "";
//    price_tip = "";
//    
//}
//
//let arr_design = ["1-Деловой " , "2-Обычный ", "3-На Ваш вкус ",];
//let design = prompt('Какой дизайн сайта Вам нужен? Ответ дайте цифрой.', arr_design);
//
//console.log(design);
//
//let arr_adaptivnost = ["1-Для телефонов и планшетов" , "2-Для ПК", "3-И для мобильных и для ПК"];
//let adaptivnost = prompt('Для каких устройтсв (целевой аудитории)  Вам нужен сайт? Ответ дайте цифрой.', arr_adaptivnost);
//
//console.log(adaptivnost);
//
//let srok_adaptivnost;
//let price_adaptivnost;
//
//if (adaptivnost == 1){
//    srok_adaptivnost = 4;
//    price_adaptivnost = 3000;
//}
//
//if (adaptivnost == 2){
//    srok_adaptivnost = 3;
//    price_adaptivnost = 2000;
//}
//
//if (adaptivnost == 3){
//    srok_adaptivnost = 6;
//    price_adaptivnost = 5000;
//}
//
//if (adaptivnost == 4){
//    srok_adaptivnost = "Неизвестно сколько";
//}
//    if (adaptivnost == 0 || adaptivnost > 4){
//   srok_adaptivnost = "Неизвестно сколько";
//   price_adaptivnost = "Неизвестно сколько";
//    
//}
//
//let sroki = srok_tip + srok_adaptivnost + " дней";
//let price = price_tip + price_adaptivnost + " рублей";
//
//if (tipSaita == 3 || adaptivnost == 4){
//    alert("Нужно обсуждать ТЗ");
//}
//else{
//    alert("Срок в рабочих днях: " + sroki);
//    alert("Приблизительная стоимость: " + price + " рублей");
//}
//
//function outChoiceSroki(t, element){
//let i = document.querySelector('#' + element);
////    t = sroki;
//i.innerHTML = t;
//}
//
//outChoiceSroki(sroki, 'outSroki');
//outChoiceSroki(price, 'outPrice');
//
//
//document.getElementById('tip1').options[tipSaita].selected=true;
//document.getElementById('tip2').options[design].selected=true;
//document.getElementById('tip3').options[adaptivnost].selected=true;

    
    
});
