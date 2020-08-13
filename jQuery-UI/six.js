$('.button').click(function () {
    if (this.id == "add") {
        $('#tar').addClass("myClass")
    } else {
        $('#tar').removeClass("myClass")
    }
})

$(".button").click(function () {
    if (this.id == "button-1") {
        $("#tar").addClass("myClass");
    } else {
        $("#tar").removeClass("myClass");
    }
});

$(() => {
    $('#switch').click(function () {
        $(".small").switchClass("small", "big", 'fast');
        $(".big").switchClass("big", "small", 'fast');
        return false;
    });
});

$('#button-1').click(function () {
    $('#tar').animate({
        backgroundColor: "red",
        color: "white"
    });
})

$("#button-2").click(() => {
    $("#tar").animate({
        backgroundColor: "green"
    });
});

var flag = true;
$("#button-3").click(function () {
    if (flag) {
        $("#tar").animate({
            backgroundColor: "black"
        }, 2000);
    } else {
        $("#tar").animate({
            backgroundColor: "red"
        }, 3000);
    }
    flag = false;
});

$('#effect-1').click(function () {
    $("#effect-1").effect("shake", {
        times: 10,
        distance: 150
    }, 3000, function () {
        $(this).css("background", "blue");
    });
});  

$('#b-2').click(function() {  
    $( "#b-2" ).effect({  
       effect: "slide", 
       //effect: "pulsate",  
       //effect: "puff", 
       //effect: "highlight", 
       //effect: "fold", 
       //effect: "fade",  
       //effect: "drop",  
       //effect: "clip", 
       //effect: "blind",   
      duration:1000  
    });  
 });  

