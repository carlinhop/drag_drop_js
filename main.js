var left = document.getElementById("left-box");
var right = document.getElementById("right-box");
var dragged


left.addEventListener("dragstart", 
	function(event){
		//event.preventDefault();
		event.dataTransfer.setData("text/plain",event.currentTarget.innerText);
		//console.dir(event);
	}, false);

right.addEventListener("dragenter",
	function(event){
		event.preventDefault();
		console.dir(event);;
	}, false);

right.addEventListener("dragover",
	function(event){
		event.preventDefault();
		//console.log(event);
	}, false);

right.addEventListener("drop",
	function(event){
		event.preventDefault();
		right.innerText = event.dataTransfer.getData("text/plain");
	}, false);
