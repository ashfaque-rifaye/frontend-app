// var test = document.getElementByClassName('firstElement');
// var width = test.offsetWidth - 215;

// test.setAttribute('style', 'background-position:left top, ' + width + 'px top ');

// var data =  "PDA DEI"

function onToggleMenu(){
	var element =document.getElementsByClassName('collapsable-button');
	for (var i = 0; i < element.length; i++) {
		element[i].classList.toggle('active');
		element[i].parentNode.style.visibility = "visible";
	}
}

