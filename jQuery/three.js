$("#button-14").click(()=>{
    var $x=$("#clone");
    $x.prop("color","red");
    $x.removeProp("color");
    $("#clone").append('property is '+$x.prop("color"));
});

$("#para-6").click(()=>{
    var y=$("#para-6");
    $("#clone").append(y);
});

$("#para-5").click(()=>{
    var $y=$("#para-5");
    $y.prop("color","green");
    $("#clone").append($y.prop("color"));
});

$(".b-1").click(()=>{
    $("#para").remove();
});

$(".b-1").click(()=>{
    $(".div-1").empty();
});

$(".div-1").click(()=>{
    $(".div-1").empty();
});

$(".b-2").click(()=>{
    $(".div-1").detach();
});

$("#para-6").click(()=>{
    $("#clone").append($("#para-6").detach());
});

$("#para-5").click(()=>{
    $("#clone").append($("#para-5").remove());
});

$(".buttonx").click(()=>{
    $("img").attr("width","500");
});