$("#menu-1").menu();

$(()=>{
    var m=$("#menu-1").menu();
    $(m).mouseleave(()=>{
        m.menu('collapseAll');
    });
});

$("#progress-bar").progressbar({
    value:70
});

$("#lowercase").selectmenu();

$("#uppercase").selectmenu().addClass("overflow");
 
$( "#slider-1" ).slider();  
 
$( "#spinner-1" ).spinner();  

$('#spinner-2').spinner({  
    step: 1000,   
    min: -1000000,   
    max: 1000000  
 }); 

 $("#spinner").spinner();  

 $('button').button();  

 $('#stepUp').click(function () {  
    $("#spinner").spinner("stepUp");  
 });  

 $('#stepDown').click(function () {  
    $("#spinner").spinner("stepDown");  
 });  

 $('#pageUp').click(function () {  
    $("#spinner").spinner("pageUp");  
 });  

 $('#pageDown').click(function () {  
    $("#spinner").spinner("pageDown");  
 });  

 $( "#tabs" ).tabs();  

 $("#tooltip-1").tooltip();  
 
$("#tooltip-2").tooltip();  