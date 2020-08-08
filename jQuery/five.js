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

$("#show2").click(()=>{
    $("#par").toggle();
});

$("#buttony").click(()=>{
    $("#par").fadeIn(3000);
});



