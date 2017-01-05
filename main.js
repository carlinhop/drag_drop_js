var left = document.getElementById("left-box");
var right = document.getElementById("right-box");
var dragged


left.addEventListener("dragstart", 
	function(event){
		//event.preventDefault();
		dragged = event.currentTarget.innerText;
	}, false);

right.addEventListener("dragenter",
	function(event){
		event.preventDefault();
		console.log("enter");
	}, false);

right.addEventListener("dragover",
	function(event){
		event.preventDefault();
		console.log(event);
	}, false);

right.addEventListener("drop",
	function(event){
		event.preventDefault();
		right.innerText = dragged;
	}, false);
