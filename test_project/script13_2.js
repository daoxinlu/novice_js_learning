/*function set_ck(){
	var ck_text = "usrname=ludaoxin;expires=Sun,6 Oct 2019 5:00:00 UTC";
	var new_ck_text = encodeURIComponent(ck_text); 
	document.cookie = new_ck_text;
}

function read_it(){
	var my_ck = document.cookie;
	var fixed_my_ck = decodeURIComponent(my_ck);
	var ck_arr = fixed_my_ck.split(";");
	var item1 = ck_arr[0];
	document.write(item1.split("=")[0]);
	var item2 = ck_arr[1];
	var usrname = item1.split("=");
	//var expi = item2.split("=");
	//var enname_propval = enname.split("=");
	alert("The cookie1's "+usrname[0]+" is "+ usrname[1]);
	//alert("The cookie2's "+expi[0]+" is "+ expi[1]);
	//alert("My favorite name is "+enname_propval[1]);
}
if(document.cookie){
	read_it();
}
else{
	set_ck();
	read_it();
}
*/

function set_it(){
	document.cookie = "name=tasty1;path='/'";
}
function read_it(){
	var my_ck = document.cookie;
	var ck = my_ck.split("=");
	alert(ck[0]+":"+ck[1]);
	alert(my_ck);
}
if(document.cookie){
	read_it();
}
else{
	set_it();
	read_it();
}















