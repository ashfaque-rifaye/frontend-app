
/* To Toggle the NAV-BAR MENU*/

function onToggleMenu(){
	if(document.getElementsByClassName('navbarList')[0].style.visibility != null 
		&& document.getElementsByClassName('navbarList')[0].style.visibility !== "visible"){
			document.getElementsByClassName('navbarList')[0].style.visibility = "visible";
			document.getElementsByClassName('ham-menu')[0].style.display = "none";
			document.getElementsByClassName('close-icon')[0].style.visibility = "visible";

	}
	else{
		document.getElementsByClassName('ham-menu')[0].style.display = "block";
		document.getElementsByClassName('close-icon')[0].style.visibility = "hidden";

	}
}

/* To Show or Hide elements on switching the tabs */
function toggleLoginSignUpTab(event){
	if(event==='Login'){
		document.getElementById('login').classList.toggle('active');
		document.getElementById('signUp').classList.remove('active');
		document.getElementsByClassName('input-text-login').Username.style.display = "none";
		document.getElementsByClassName('input-icon').user.style.display = "none";
		document.getElementsByClassName('form-input')[0].style.paddingTop = "0px";
		document.getElementById('signUpButton').style.display = "none";
		document.getElementById('loginButton').style.display = "block";

	

	}else{
		document.getElementById('signUp').classList.toggle('active');
		document.getElementById('login').classList.remove('active');
		document.getElementsByClassName('input-text-login').Username.style.display = "inline";
		document.getElementsByClassName('input-icon').user.style.display = "inline";
		document.getElementsByClassName('form-input')[0].style.paddingTop = "40px";
		document.getElementById('signUpButton').style.display = "block";
		document.getElementById('loginButton').style.display = "none";


	}
	
}


function openLoginPopup() {	

	if(document.getElementsByClassName('login-form')[0].style.display != null 
		&& document.getElementsByClassName('login-form')[0].style.display !== "none"){
			
		document.getElementsByClassName('login-form')[0].style.display = "block";
		document.getElementById('login').classList.toggle('active');
		document.getElementsByClassName('input-text-login').Username.style.display = "none";
		document.getElementsByClassName('input-icon').user.style.display = "none";
		document.getElementsByClassName('form-input')[0].style.paddingTop = "0px";
		document.getElementById('signUpButton').style.display ="none";

	}
	else{
		document.getElementsByClassName('login-form')[0].style.display = "none";
	}
	
}