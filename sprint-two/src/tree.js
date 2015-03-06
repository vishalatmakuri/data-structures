var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	value = Tree(value);
	this.children.push(value);
};

treeMethods.contains = function(target){
	var bool = false;
	if(this.value === target){
		bool = true;
	}
	if(!bool && this.children[0]){
		for(var i = 0; i < this.children.length; i++){
			bool = this.children[i].contains(target);
			if(bool){ break; }
		}

	}
	return bool;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
