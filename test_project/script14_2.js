var getphone = document.getElementById("getphone");
getphone.addEventListener("submit",function(event){
	var phone = document.getElementById("phone").value,
		tomatch = /^\d{11}$/;
	event.preventDefault();
	
	if(!tomatch.test(phone)){
		alert("wrong phone number enterd.");
	}
	else
		alert("that's right");
},false);