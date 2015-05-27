var Tree = function(treeName){
  var newTree = {};
  newTree.value = treeName;
  _.extend(newTree, treeMethods);
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(childName){
	childName = Tree(childName);
	this.children.push(childName);
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
 * addChild = Constant
 * contains = log(n)
 */
