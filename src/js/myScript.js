"use strict"

$(document).ready(function(){
    
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
     let elements = $('.obo_mne.img');
    elements.each((i, el) => {
        observer.observe(el);
    });
    
    function onEntry (entry){
        entry.forEach(change => {
           if(change.isIntersecting){
              
                change.target.src = change.target.dataset.scr;
           } 
        });
    }

    
$(window).scrill( () => {
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


//let arr_tip = ["1-Визитка " , "2-Интернет магазин ", "3-Другое ",];
//let tipSaita = prompt('Какой тип сайта Вам нужен? Ответ дайте цифрой.', arr_tip);
//
//console.log(tipSaita);
//
//if(tipSaita == 3){
//    
//    var tipDrugoi = prompt('Вы выбрали ответ другое, напишите необходимый тип сайта.', );
//   
//  console.log(tipSaita);
//  console.log(tipDrugoi);  
//}
//console.log(tipSaita);
//
//let srok_tip;
//let price_tip;
//
//if (tipSaita == 1){
//    srok_tip = 2;
//    price_tip = 5000;
//}
//
//if (tipSaita == 2){
//    srok_tip = 5;
//    price_tip = 25000;
//}
//
//if (tipSaita == 3){
//    srok_tip = "Без ТЗ ответ ХЗ";
//}
//
//let arr_design = ["1-Деловой " , "2-Уже поздно, я не знаю ", "3-А что это? ",];
//let design = prompt('Какой дизайн сайта Вам нужен? Ответ дайте цифрой.', arr_design);
//
//console.log(design);
//
//let arr_adaptivnost = ["1-Для телефонов и планшетов" , "2-Для ПК", "3-И для мобильных и для ПК", "4-Ну я сам не знаю надо обсуждать =?"];
//let adaptivnost = prompt('Для каких устройтсв (целевой аудитории)  Вам нужен сайт? Ответ дайте цифрой.', arr_adaptivnost);
//
//console.log(adaptivnost);
//
//let srok_adaptivnost;
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
//    srok_adaptivnost = "Без ТЗ ответ ХЗ";
//}
//
//let sroki = srok_tip + srok_adaptivnost;
//let price = price_tip + price_adaptivnost;
//
//if (tipSaita == 3 || adaptivnost == 4){
//    alert("Нужно обсуждать ТЗ");
//}
//else{
//    alert("Срок в рабочих днях: " + sroki);
//    alert("Приблизительная стоимость: " + price + " рублей");
//}

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top -60 + "px"});
}); 
    
    
});

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});