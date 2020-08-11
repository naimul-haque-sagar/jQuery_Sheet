$("#resizable").resizable();

$("#resizable").resizable({
    animate:true,
    ghost:true
});

$("#resizable").resizable({
    delay:1000,
    distance:40,
    autoHide:true
});

$("#resizable").resizable({
    alsoResize:"#resizable-10"
});

$("#resizable-10").resizable();

$("#selectable-1").selectable();

$("#sortable-1").sortable();

$("#sortable-1").sortable({
    delay:1000,
    distance:40
});

$("#sortable-4").sortable({
    update:function(event,ui){
        var p=$(this).sortable('toArray').toString();
        $("#sortable-5").text(p);
    }
});

$("#sortable-10").sortable({
    start:function(event,ui){
        $("#result").html($("#result").html()+"<b>start</b>");
    },
    receive:function(event,ui){
        $("#result").html($("#result").html()+"added");
    },
    stop:function(event,ui){
        $("#result").html($("#result").html()+"<b>stop</b>");
    }
});

$("#sortable-11").sortable({
    connectWith:"#sortable-10,#sortable-11"
});