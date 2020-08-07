$(document).ready(()=>{
    $("#para").text('hello');
    $("#para").css({"background-color":"green"});
});

$("#button").click(()=>{
    $("#para-1,#para-2").css(
        {
            "background-color":"red",
            "font-size":"200%"
        }
    );
});

$("#button-1").click(()=>{
    $("#para-3,#para-4").before("<p>Before text</p>");
});

$("#button-2").click(()=>{
    $("#para-5,#para-6").prepend("<p>Before :</p>");
});

$("#button-4").click(()=>{
    $("ol").prepend("<li>Item added</li>");
});

$("#button-3").click(()=>{
    $("#para-5,#para-6").after("<p>After text</p>");
});

$("#button-5").click(()=>{
    $("<p>Inserted after</p>").insertAfter("#para-5,#para-6");
});

$("#button-6").click(()=>{
    $("#para-3,#para-4").append("<p>Appended </p>");
    $("ol").append("<li>Appended item</li>");
    $("<p>Appended To</p>").appendTo("#para-3");
});

$("#button-7").click(()=>{
    $("#para-3").clone().appendTo("#clone");
});
