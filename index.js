var ki = "<span >viral@sinha</span>:<span style=\"color:red\"><b> Hey !!</b></span><br><span >viral@sinha</span>:<span style=\"color:red\"><b> exec About me</b></span><br><br><br><span style=\"color:green\">This is Viral Sinha, currently a final semester computer science graduate student at <span style=\"color:cyan\">Univeristy at Buffalo, New York</span>.<br><br>I have 4 years of full-stack development experience using C#, .Net, Javascript, SQL<br><br> My area of interest include : Networking, Systems, backend engineering </span><br><br> <span >viral@sinha</span>: exec viral github <br><br><a style=\"color:green\" href=\"https://github.com/vsin12\">./github.out</a><br><br><span >viral@sinha</span>: exec viral linkedin <br><br><a style=\"color:green\" href=\"https://www.linkedin.com/in/v-sinha/\">./linkedin.out</a><br><br><span >viral@sinha</span>: exec viral facebook <br><br><a style=\"color:green\" href=\"https://www.facebook.com/viral.sinha/\">./facebook.out</a><br><br><span >viral@sinha</span>: exec viral stackoverflow <br><br><a style=\"color:green\" href=\"https://stackoverflow.com/users/11894205/vs12?tab=profile\">./stackoverflow.out</a><br><br><span >viral@sinha</span>: cd /projects<br><br><span >viral@sinha/projects</span>: ls -la <br><ol style=\"color:green\"><li>Research on mm-wave communication (by studying various physical layer parameters like PDP, SNR, CIR, CIR ) to identify the optimum threshold for selecting beam-alignment/rate adaptation for various environments using 60Ghz testbed.</li><br><li>Client-server chat application using TCP/UDP Sockets (C++)</li><br><li>Reliable data transfer protocols : Go-Back-N & Alternating bit (C++) </li><br><li>Priority scheduling of threads,semaphores in Pintos (C) </li><br><li>Airline consortium on Blockchain (Node.js, Express.js, Bootstrap, Web3, MongoDb, Ganache, Solidity)</li></ol><br><span >viral@sinha</span>: <span style=\"color:cyan\"> Downloading full-time job  27% completed . . . . .</span>"

var Typer={
	text: ki,
	accessCountimer:null,
	index:0, 
	speed:4,
	// file:"", 
	accessCount:0,
	deniedCount:0, 
	init: function(){
		accessCountimer=setInterval(function(){Typer.updLstChr();},500); 
		// $.get(Typer.file,function(data){
		// 	Typer.text=ki;
		// 	Typer.text = Typer.text.slice(0, Typer.text.length-1);
		// });
	},
 
	content:function(){
		return $("#console").html();
	},
 
	write:function(str){
		$("#console").append(str);
		return false;
	},
 
	addText:function(key){
		
		if(key.keyCode==18){
			Typer.accessCount++; 
			
			if(Typer.accessCount>=3){
				Typer.makeAccess(); 
			}
		}
		
    		else if(key.keyCode==20){
			Typer.deniedCount++; 
			
			if(Typer.deniedCount>=3){
				Typer.makeDenied(); 
			}
		}
		
    		else if(key.keyCode==27){ 
			Typer.hidepop(); 
		}
		
    		else if(Typer.text){ 
			var cont=Typer.content(); 
			if(cont.substring(cont.length-1,cont.length)=="|") 
				$("#console").html($("#console").html().substring(0,cont.length-1)); 
			if(key.keyCode!=8){ 
				Typer.index+=Typer.speed;	
			}
      		else {
			if(Typer.index>0) 
				Typer.index-=Typer.speed;
			}
			var text=Typer.text.substring(0,Typer.index)
			var rtn= new RegExp("\n", "g"); 
	
			$("#console").html(text.replace(rtn,"<br/>"));
			window.scrollBy(0,50); 
		}
		
		if (key.preventDefault && key.keyCode != 122) { 
			key.preventDefault()
		};  
		
		if(key.keyCode != 122){ // otherway prevent keys default behavior
			key.returnValue = false;
		}
	},
 
	updLstChr:function(){ 
		var cont=this.content(); 
		
		if(cont.substring(cont.length-1,cont.length)=="|") 
			$("#console").html($("#console").html().substring(0,cont.length-1)); 
		
		else
			this.write("|"); // else write it
	}
}

function replaceUrls(text) {
	var http = text.indexOf("http://");
	var space = text.indexOf(".me ", http);
	
	if (space != -1) { 
		var url = text.slice(http, space-1);
		return text.replace(url, "<a href=\""  + url + "\">" + url + "</a>");
	} 
	
	else {
		return text
	}
}

Typer.speed=3;
// Typer.file="viral.txt"; // add your own name here
Typer.init();
 
var timer = setInterval("t();", 30);
function t() {
	Typer.addText({"keyCode": 123748});
	
	if (Typer.index > Typer.text.length) {
		clearInterval(timer);
	}
}


