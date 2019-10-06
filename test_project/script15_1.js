var im = document.getElementById("pic1"),
	imlink = document.getElementById("imlink");
/*im.addEventListener("mouseover",function(){
	im.src = "image2.gif";
},false);
im.addEventListener("mouseout",function(){
	im.src = "image1.gif";
},false);*/

function on_image(){
	
	im.src = "image2.gif";
}
function off_image(){
	
	im.src = "image1.gif";
}
im.addEventListener("mouseover",on_image,false);
imlink.addEventListener("focus",on_image,false);
im.addEventListener("mouseout",off_image,false);
imlink.addEventListener("blur",off_image,false);