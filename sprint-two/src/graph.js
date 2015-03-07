

var Graph = function(){
	this.storage = {};
};

Graph.prototype.addNode = function(value){
	//var temp = value;
	//value = new Graph(value);
	//value.name = temp;
	//this.storage[value.name]= value;
	this.storage[value] = [];
};

Graph.prototype.contains = function(node){
	if(node in this.storage){return true;}
	else {return false;}
};

Graph.prototype.removeNode = function(node){
	delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  //return this.storage[fromNode].storage[toNode.name]===toNode;	
	for (var i = this.storage[fromNode].length - 1; i >= 0; i--) {
		if(this.storage[fromNode][i]===toNode){return true}
	};
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //this.storage[fromNode].storage[toNode.name]= toNode;
  //this.storage[toNode].storage[fromNode.name]= fromNode;	
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
 //delete this.storage[fromNode].storage[toNode.name];
 //delete this.storage[toNode].storage[fromNode.name];
 
 for(var i =0; i<this.storage[fromNode].length; i++){
 	if(this.storage[fromNode][i]===toNode){
 		this.storage[fromNode].splice(i,1);
 	}
 }  
 for(var i =0; i<this.storage[toNode].length; i++){
 	if(this.storage[toNode][i]===fromNode){
 		this.storage[toNode].splice(i,1);
 	}
 }
};

Graph.prototype.forEachNode = function(cb){
	for(var x in this.storage){
		cb(x);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



