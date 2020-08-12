$("#accordion").accordion();

$("#accordion-1").accordion({
    disabled:false
});

$("input").each(function(){
    $(this).change(function(){
        if($(this).attr("id")=="disableaccordion"){
            $("#accordion-1").accordion("option","disabled","true");
        }else{
            $("#accordion-1").accordion("option","disabled","false");
        }
    });
});

$(function(){
    var availabel=["a","b","c","d","e","f"];

    $("#autocomplete").autocomplete({
        source:availabel,
        autofocus:true
    });
});

$("#button-1,#button-2,#button-3").button();

$("#button-4").button({
    icons:{
        primary:"ui-icon-locked"
    },
    disabled:true
});

$("#date").datepicker();

$("#date-1").datepicker();

$("#date-2").datepicker({ 
    dateFormat:"yy-mm-dd",  
    altField: "#date-3",  
});

$("#open").dialog({
    autoOpen:false
});

$("#open-dialog").click(()=>{
    $("#open").dialog("open");
});

$("#open-1").dialog({
    autoOpen:false,
    buttons:{
        OK:function(){
            $(this).dialog("close");
        }
    },
    title:"Dialog"
});

$("#open-dialog-1").click(()=>{
    $("#open-1").dialog("open");
});