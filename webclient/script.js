// var test = document.getElementByClassName('firstElement');
// var width = test.offsetWidth - 215;

// test.setAttribute('style', 'background-position:left top, ' + width + 'px top ');

// var data =  "PDA DEI"

function onToggleMenu(){
	var element =document.getElementsByClassName('nav-menu');
	for (var i = 0; i < element.length; i++) {
		// element[i].classList.toggle('active');
		document.getElementsByClassName('navbarList')[0].style.visibility = "visible";
	}
}

