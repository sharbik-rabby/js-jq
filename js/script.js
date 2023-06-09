



function textChing(){
    document.getElementById('p').innerHTML = 'look whos back'
}


function fontBig(){
     document.getElementById('font_s').style.fontSize = '30px';
}



function dis_none(){
     document.getElementById('d_none').style.display = 'none';
}

function d_bloc(){
    document.getElementById('d_b').style.display='block';
}

function myName(){
document.getElementById('onc').innerHTML='save me allah';
}



function hide(){
document.getElementById('demo').style.display="none";
}
function show(){
document.getElementById('demo').style.display="block";
}


// output section

//    Variable

var number_one = 50;
var number_two = 30;
var total = number_one + number_two;

function add(){
document.getElementById('var').innerHTML= total;
}



let num1, num2, result;

num1 = 30;
num2 = 80;
result = num1 + num2;

function add2(){
document.getElementById('var2').innerHTML=result;
}


//  array


let cars =["Toyota", "Bmw", "Mercedes-Benz", "Audi",];





function click(){
document.getElementById('arr').innerHTML=cars;
}



// jquary start

$(document).ready(function(){
// alert 

$('').on("click",function(){
    alert("");
});

$( ".ques" ).on( "click", function() {
    $( ".ans" ).slideToggle( "slow" );
  });

// hide
$('#hide').on("click",function(){
    $('h3').hide();
});

// show
$('#show').on("click",function(){
    $('h3').show();
});

// toggle
$('#toggle').on("click",function(){
    $('h3').toggle();
});
// all p tage hide
$('p').on("click", function(){
$(this).hide();
});
//    mouseenter

$('moe').on("mouseenter",function(){
$('moe').css("background-color", "red");
});

// dblclick

$('dbl').on("dblclick", function(){
$('p').hiden();
});

$('#fadi').on("click",function(){
$('#div1').fadeIn(500);
});


$('#fado').on("click",function(){
$('#div2').fadeOut(500);
});


$('#fadtog').on("click",function(){
$('#div3').fadeToggle(1000);
});

$('#fadto').on("click",function(){
$('#div4').fadeTo(500,.5);
});

// slide

$('#slid').on("click",function(){
$('#sli1').slideDown();
});

// slide up
$('#slidu').on("click",function(){
$('#sli2').slideUp();
});

// slide toggle
$('#slidt').on("click",function(){
$('#sli3').slideToggle();
});

// animate start
$('#anim').on("click",function(){
$('#ani1').animate({left:'500px',
                    width:'400px',
                    height:'400px'},1000);
});



// animate start 2
$('#anim2').on("click",function(){
var div = $('#ani2');

div.animate({width: '300px', opacity: '.5'},'slow');
div.animate({height: '300px', opacity: '.5'},'slow');
div.animate({width: '150px', opacity: '1'},'slow');
div.animate({width: '100px', opacity: '1'},'slow');


});



});

