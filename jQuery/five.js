
$("#button-a").click(() => {
    $("#div1").delay(5000).fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
});

$("#button-b").click(() => {
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
});

$("#button-c").click(() => {
    $("#div1").fadeTo("slow", 0.3);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.5);
});

$("#click").click(() => {
    $("#panel").slideDown("slow");
});

$("#click-1").click(() => {
    $("#panel-1").slideUp("slow");
});

$("#click-2").click(() => {
    $("#panel-1").slideToggle("slow");
});

$(document).ready(() => {
    $("#hide").click(() => {
        $("p").hide();
    });
});

$(document).ready(() => {
    $("#show").click(() => {
        $("p").show();
    });
});

$(document).ready(() => {
    $("#hide1").click(() => {
        $("#par").hide(1000);
    });
});

$(document).ready(() => {
    $("#show1").click(() => {
        $("#par").show(1500);
    });
});

$("#show2").click(() => {
    $("#par").toggle();
});

$("button").click(function () {
    $(".div-x").animate({ left: '450px' });
});


