var computer_parts = [["monitors","LCD","Vibrant color"],
						["Motherboards","Fast"],
						["chips","pentium","very fast"],
						["hard drives",'1TB',"RAM","32GB"]];
var i=0,j=0;
for(i=0;i<computer_parts.length;i++){
	for(j=0;j<computer_parts[i].length;j++){
		if(j===0&&computer_parts.length[i]!=1){
			document.write(computer_parts[i][j]+": ");
		}else if(j===computer_parts[i].length-1){
			document.write(computer_parts[i][j]+"<br>");
		}else
			document.write(computer_parts[i][j]+",");
	}
}