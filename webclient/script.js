
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
		document.getElementsByClassName('input-icon').user.style.display = "none";
		document.getElementsByClassName('form-input')[0].style.paddingTop = "0px";
		document.getElementsByTagName('button')[0].style.visibility ="hidden";
		document.getElementsByTagName('button')[1].style.visibility ="visible";

	

	}else{
		document.getElementById('signUp').classList.toggle('active');
		document.getElementsByClassName('input-text-login').Username.style.display = "inline";
		document.getElementsByClassName('input-icon').user.style.display = "inline";
		document.getElementsByClassName('form-input')[0].style.paddingTop = "40px";
		document.getElementsByTagName('button')[1].style.visibility ="hidden";
		document.getElementsByTagName('button')[0].style.visibility ="visible";

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
		document.getElementsByTagName('button')[0].style.visibility ="hidden";

	}
	else{
		document.getElementsByClassName('login-form')[0].style.display = "none";
	}
	
}