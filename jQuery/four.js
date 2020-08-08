$("#para-3").click(()=>{
    var x=$("#para-3").offset();
    alert("Top "+x.top+" Left "+x.left);
});

$("#para-4").click(()=>{
    var x=$("#para-4").position();
    alert("Top "+x.top+" Left "+x.left);
});

$("#para-4").click(()=>{
    $("#para-4").addClass("st");
});

$("#st").click(()=>{
    alert($("#st").hasClass("st"));
});

$("#st").click(()=>{
    $("#clone").text($("#st").hasClass("st"));
});

$("#st").click(()=>{
    $("#st").toggleClass("st");
});

$("div").click(()=>{
    alert("div width"+$("div").width()+" height "+$("div").height());
});

$("div").click(()=>{
    alert("div innerWidth"+$("div").innerWidth());
});

$("div").click(()=>{
    alert("div innerHeight"+$("div").innerHeight());
});

$("div").click(()=>{
    alert("div outerWidth"+$("div").outerWidth());
});

$("#para-4").click(()=>{
    $("#para-4").wrap("<div></div>");
});

$("#para-4").click(()=>{
    $("#para-4").wrapAll("<div></div>");
});

$("#para-4").click(()=>{
    $("#para-4").unwrap();
});