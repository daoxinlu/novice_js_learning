var items=0;
msg="";
city=window.prompt("what's the the of your city?","");
if(city===null||city===""){
	msg="No city entered. Cannot determine delivery availability.";
}
else{
	switch(city){
		case "长沙":
			msg="We can have items delivered to you in 1 week.";
			items=10;
			break;
		case "贵阳":
			msg="we can have items delivered to you in 3 days."
			items=5;
			break;
	}
}
document.write(msg);
if(items>0){
	document.write("<p>We can deliver up to "+items+" items to your city.</p>");
	document.write("<p>Print this out,write your item numbers below, and mail it to us to order.</p>");
	for(var count=1;count<=items;count++){
		document.write(count+".________<br>");
	}
}