function Computer(type,processor,ram,hd){
	this.type = type;
	this.processor = processor;
	this.ram = ram;
	this.hd = hd;
}
var work_computer = new Computer("Work","3Ghz","8GB","1TB");
Computer.prototype.describe = function(){
	document.write("<p>"+this.type+":<br>");
	document.write("Processor:"+this.processor+"<br>");
	document.write("RAM: "+this.ram+"<br>");
	document.write("Hard disk:"+this.hd+"</p>");
};

var home_computer= new Computer("Home","4Ghz","32GB","10TB");
var gaming_computer = new Computer("Gaming","4.7Ghz","32GB","512GB");
work_computer.describe();
home_computer.describe();
gaming_computer.describe();