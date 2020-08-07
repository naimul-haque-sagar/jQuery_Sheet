
jQuery(document).ready(()=>{
    $('#random-text').text('Hello world');
});

$(document).ready(()=>{
    $('#text').text('Hello again');
});

$(document).ready(()=>{
    $("#button-1").click(()=>{
        $("#text-1").html("Changed on click");
    });
});

$(document).ready(()=>{
    $("#button-2").click(()=>{
        alert($("#text-2").html());
    });
});

$("#button-3").click(()=>{
    $("#text-3,#text-4").text('text changed');
});

function changeVal(){
    let v=$("#single").val();
    $("#text-5").html(v);
}

$("select").change(changeVal);


function changeVal1(){
    let v=$("#single-1").val();
    let v1=$("#single-2").val()||[];
    $("#text-6").text(v+' '+v1);
}

$("select").change(changeVal1);