var registration = document.getElementById('registrationButton');
var loginForm = document.getElementById('loginForm');
var registrationForm = document.getElementById('registrationForm');

registrationForm.style.display = 'none';

function switchFormToRegistration() {
	loginForm.style.display = 'none';
	registrationForm.style.top = '45%';
	registrationForm.style.display = 'block';
}

function switchFormToLogin() {
	registrationForm.style.display = 'none';
	loginForm.style.display = 'block';
}

registrationButton.onclick = function() {
	switchFormToRegistration();
}

loginButton.onclick = function() {
	switchFormToLogin();
}