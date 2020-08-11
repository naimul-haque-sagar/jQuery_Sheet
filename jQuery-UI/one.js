
$("#maroon-color").droppable({
  drop:function(event,ui){
    $(this).html(ui.draggable.remove().html());
    $(this).droppable('destroy');
    $(this).find("p").html("destoryed");
  }
});

$("#pink").draggable();
$("#pink-color").droppable({
  drop:function(event,ui){
    $(this).find("p").html("dropped");
  },
  over:function(event,ui){
    $(this).find("p").html("moving in");
  },
  out:function(event,ui){
    $(this).find("p").html("mvoing out");
  }
});

$("#blue-color").droppable({
  scope:"blue",
  drop:function(event,ui){
    $(this).find("p").html("dropped");
  }
});

$("#black-color").droppable({
  scope:"black",
  drop:function(event,ui){
    $(this).find("p").html("dropped");
  }
});

$("#maroon").draggable({
  revert:true
});

$(function () {
  $("#draggable").draggable();
});

$(() => {
  $("#droppable-1").droppable({
    drop: function (event, ui) {
      $(this).find("p").html("Dropped");
    }
  });
});

$(()=>{
  $("#droppable-2").droppable({
    drop:function(event,ui){
      $(this).find("p").html("dropped ");
    }
  });  
});

$("#droppable-3").droppable({
  drop:function(event,ui){
    $(this).find("p").html("dropped");
  }
});

$("#green").draggable();
$("#red").draggable();
$("#green-color").droppable({
  accept:"#green",
  drop:function(event,ui){
    $(this).find("p").html("Dropped");
  }
});

$("#red-color").droppable({
  accept:"#red",
  drop:function(event,ui){
    $(this).find("p").html("Dropped");
  }
});

$("#blue").draggable({
  scope:"blue"
});

$("#black").draggable({
  scope:"black"
});

