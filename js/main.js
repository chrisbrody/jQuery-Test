$('p').addClass('test');
$('.test').hide();

$('#idTestShow').on('click', function() {
	$('#idTest').toggleClass('invisible visible');
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) { // this refers to window
        alert("You've scrolled 100 pixels.");
    }
});
