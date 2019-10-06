function startclock(){
	var nowtime = new Date(),
		hours = nowtime.getHours(),
		mins = nowtime.getMinutes(),
		seconds = nowtime.getSeconds(),
		ap = (hours>=12)? "p.m":"a.m",
		month = nowtime.getMonth(),
		date = nowtime.getDate(),
		year = nowtime.getFullYear(),
		clock_div = document.getElementById("my_clock");
	hours = (hours>=13)? hours-=12:hours;
	hours = (hours<1)? 12:hours;
	mins = (mins<10)? mins="0"+mins:mins;
	seconds = (seconds<10)? seconds="0"+seconds:seconds;
	month++;
	clock_div.innerHTML = hours+":"+mins+":"+seconds+" "+ap+"<br>"+month+"/"+date+"/"+year;
	setTimeout(function() {startclock();},1000);
}
startclock();