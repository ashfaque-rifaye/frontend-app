
/* To Toggle the NAV-BAR MENU*/

function onToggleMenu(){
	if(document.getElementsByClassName('navbarList')[0].style.visibility != null 
		&& document.getElementsByClassName('navbarList')[0].style.visibility !== "visible")
			document.getElementsByClassName('navbarList')[0].style.visibility = "visible";
	else{
		document.getElementsByClassName('navbarList')[0].style.visibility = "hidden";
	}
}

/* To Show or Hide elements on switching the tabs */
function toggleLoginSignUpTab(event){
	if(event==='Login'){
		document.getElementById('login').classList.toggle('active');
		document.getElementsByClassName('input-text-login').Username.style.display = "none";

	}else{
		document.getElementById('signUp').classList.toggle('active');
		document.getElementsByClassName('input-text-login').Username.style.display = "inline";
	}
	
}


function openLoginPopup() {	

	if(document.getElementsByClassName('login-form')[0].style.display != null 
		&& document.getElementsByClassName('login-form')[0].style.display !== "none"){
			
		document.getElementsByClassName('login-form')[0].style.display = "block";
		document.getElementById('login').classList.toggle('active');

	}
	else{
		document.getElementsByClassName('login-form')[0].style.display = "none";
	}
	
}