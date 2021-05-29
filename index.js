

// Getting screen resolutions and positioning the start button
var width = screen.width - 100;
var height = screen.height - 200;
var code = 0;
$('#start').css(
{
"top" : (height/2)+'px',
"left" : (width/2)+'px'
});

$('#start').click( function()
{
$(this).fadeOut('slow');
$('#score').show();
genLetter();
});

// Dealing KeyEvents and fading out matched bubble
$(document).keydown( function(event)
{
var keycode = event.keyCode;
$('.bubb'+keycode).animate(
{
"top" : height+"px", "opacity" : 0
}, 'slow');

$('.bubb'+keycode).fadeOut('slow').hide( 'slow', function()
{
code += 20;
$('#score').html(code);
$(this).remove();
}
);
});

// Generating a random alphabet between A-Z
function genLetter()
{
var color = randomColor();
var k = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
var ch = String.fromCharCode(k);
var top = Math.floor(Math.random() * height );
var left = Math.floor(Math.random() * width );
$('body').append('<span class="bubb bubb'+ k +'" style="left: '+ left +'; top: '+ top +'; background-color:'+ color +'">'+ ch +'</span>');
setTimeout(genLetter, 1000);
}

// random color 
function randomColor()
{
var color = '';
var values = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
for (c = 0; c < 6; c++)
{
no = Math.floor(Math.random() * 15);
color += values[no];
}
return color;
}
