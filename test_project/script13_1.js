var getEmail = document.getElementById("getemail");
getemail.addEventListener("submit",function(event){
	var email_add = document.getElementById("email").value;
	event.preventDefault();
	if((email_add.indexOf("@")>=0&&email_add.indexOf(".")>=0)){
		alert("This is a variable e-mail address!");
	}else
		alert("wrong address,exiting...");
},false);
