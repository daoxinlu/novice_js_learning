setTimeout(function(){
	var stay = confirm("are you sure to the baidu.com");
	if(stay===true){
		window.location = "https://www.baidu.com";
	}
},5000);