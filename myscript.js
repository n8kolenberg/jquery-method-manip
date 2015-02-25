
$('.rocket').width(0).height(0);


$('h2').click(function(){
	$(this).addClass('wicked');
});


$('span.pq').each(function(){
	var pullquote = $(this).clone();
	pullquote.removeClass('pq');
	pullquote.addClass('pullquote');
	$(this).before(pullquote);

}); //end each function

var newImage = new Image();
newImage.src = ('img/n8logo.png');

$('.rocket').animate(
{
	width: '400px',
	height: '300px',
	'border-radius': '60%'
},
3000, function(){
	$(this).hover(function(){
	$(this).attr('src', newImage.src);
	$(this).attr('alt', 'Image of N8 logo');
	}, //end mouseOver
	function(){
		$(this).attr('src', 'img/rocket.png');

	} //end mouseExit
	)//end hover function
});//end callback function and animation
	