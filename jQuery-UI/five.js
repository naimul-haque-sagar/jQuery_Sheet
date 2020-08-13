
function run() {
    $("#effect").hide("shake", { times: 1, distance: 500 }, 1000, callback);
};

function callback() {
    setTimeout( ()=> {
        $("#effect").removeAttr("style").hide().fadeIn();
    }, 5000);
};

$("#button-1").click(() => {
    run();
    return false;
});  


function run(){
    $("#effect-1").hide("shake",{times:5,distance:400},1000);
}

$("#button-2").click(()=>{
    run();
    return false;   
});


function run(){
    $("#effect-1").show("shake",{times:5,distance:400},1000,callback);
}

function callback(){
    setTimeout(()=>{
        $("#effect-1:visible").removeAttr("style").fadeOut();
    },1000);
}

$("#button-2").click(()=>{
    run();
    return false;
});

$("#effect-1").hide();

function run() {
    $("#effect-1").toggle('explode', 300);  
}

$("#button-2").click(function () {
    run();
    return false;
});

