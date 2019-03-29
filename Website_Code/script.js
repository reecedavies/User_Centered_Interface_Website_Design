// script

//Variables depicting user's account information
localStorage.setItem("first_name", "Troy");
localStorage.setItem("last_name", "Williams");
localStorage.setItem("username", "TWilliams");
localStorage.setItem("password", "password");
localStorage.setItem("email", "troy.williams@students.plymouth.ac.uk");
localStorage.setItem("home_address", "2 Example street, Exeter, United Kingdom, EX65TB");
localStorage.setItem("billing_address", "23 Example road, Plymouth, United Kingdom, PL82DY");
localStorage.setItem("status", "active");

// Used to check whether the user is logged in, or not
var logChecker;

// Prevents isLoggedIn from returning to a state that
// stops the user signing in or out
if (logChecker == true)
{
	sessionStorage.setItem("isLoggedIn", true);
}

// Alters key points depending whether they are logged in or not
window.onload = function()
{
	if(sessionStorage.getItem("isLoggedIn") == "true")
	{
		// User dropdown menu
		document.getElementById("dropdown_content_id").innerHTML ="<a id='link_one' href='user_account.html'>Account Details</a> <a id='link_two' href='page_not_found.html'>Personal Preferences</a> <a id='link_three' href='#' onclick='logOut()'>Sign out</a>";
		document.getElementById("dropdown_button_id").innerHTML = "<a href='user_account.html' >" + localStorage.getItem("username") + "  " + "<img src='images/user_icon.png' class='user_icon'> </a>  ";
	
		// User Account details
		document.getElementById("account_name").innerHTML = "<mark style='background: none; color: #189ce8;'>NAME: </mark>" + localStorage.getItem("first_name") + " " + localStorage.getItem("last_name");
		document.getElementById("account_username").innerHTML = "<mark style='background: none; color: #189ce8;'>USERNAME: </mark>" + localStorage.getItem("username");
		document.getElementById("account_email").innerHTML = "<mark style='background: none; color: #189ce8;'>EMAIL: </mark>" + localStorage.getItem("email");
		document.getElementById("account_home_address").innerHTML = "<mark style='background: none; color: #189ce8;'>HOME ADDRESS: </mark>" + localStorage.getItem("home_address");
		document.getElementById("account_billing_address").innerHTML = "<mark style='background: none; color: #189ce8;'>BILLING ADDRESS: </mark>" + localStorage.getItem("billing_address");
		document.getElementById("account_status").innerHTML = "<mark style='background: none; color: #189ce8;'>ACCOUNT STATUS: </mark>" + localStorage.getItem("status");
	}
}

// Home page login button
// Logs the user out to prevent errors
function goToLogin()
{
	if(sessionStorage.getItem("isLoggedIn") == "true")
	{
		alert("You will be logged out");
		
		sessionStorage.isLoggedIn = false;
		logChecker = false;
	}
	
	window.location.replace("login.html");
}

// Home page create account button
// Logs the user out to prevent errors
function goToSignUp()
{
	if(sessionStorage.getItem("isLoggedIn") == "true")
	{
		alert("You will be logged out");
		
		sessionStorage.isLoggedIn = false;
		logChecker = false;
	}
	
	window.location.replace("sign_up.html");
}

// Shop now button on Home page
// Moves user to Memberships page
function goToMemberships()
{
	window.location.replace("memberships.html");
}

// Checks the details from Login form, and makes sure the info submitted is correct
function checkDetails(form)
{
	if(form.username.value == localStorage.getItem("username") && form.password.value == localStorage.getItem("password"))
	{
		sessionStorage.isLoggedIn = true;
		logChecker = true;
		
		// Clear text boxes, or go to user page
		window.location.replace("user_account.html");
	}
	else
	{
		alert("The username and password is incorrect");
	}
}

// Logs the user out
function logOut()	//Stille needs onclick event
{
	sessionStorage.isLoggedIn = false;
	logChecker = false;
	
	window.location.replace("index.html");
}

