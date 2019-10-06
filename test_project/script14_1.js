var getphone = document.getElementById("getphone");
getphone.addEventListener("submit",function(event){
	var phone = document.getElementById("phone").value,
		tomatch = /^\d{11}$/;
	event.preventDefault();
	document.write(phone);
	if(tomatch.test(phone)){
		alert("phone number validated.");
	}
	else
		alert("wrong phone number enterd.");
},false);