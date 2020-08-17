$("#click-4").click(() => {
    alert("You clicked");
});

$("#click-5").click(() => {
    $("#click-5").hide();
});

$("#click-6").bind("click", () => {
    alert("binded item");
});

$("#se").change(() => {
    document.getElementById("loc")
        .innerHTML = "You selected: " + document
            .getElementById("se").value;
});

$("form").submit((event) => {
    if ($("input:first").val() === "yes") {
        $("span").text("Submitted").show();
        return;
    }
    $("span").text("Not valid").show().fadeOut(2000);
    event.preventDefault();
});

$("#type").keydown(() => {
    $("#type").css("background-color", "green");
});

$("#type").keyup(() => {
    $("#type").css("background-color", "red");
});

$("#type1").keypress(() => {
    $("span").text(i += 1);
});

$(document).ready(() => {
    $("input").keypress(function () {
        $("span").text(i += 1);
    });
});

$("#mouseevent").mouseenter(() => {
    $("#mouseevent").css("background-color", "red");
});

$("#mouseevent").mouseleave(() => {
    $("#mouseevent").css("backgroun-color", "yello");
});

$(document).ready(()=>{  
    $("p").mouseenter(()=>{  
        $("p").css("background-color", "red");  
    });  
    $("p").mouseleave(()=>{  
        $("p").css("background-color", "blue");  
    });  
});  