var BinarySearchTree = function(value){
  var instance=Object.create(Binarymethods);
  instance.value=value;
  instance.right= null;
  instance.left= null; 
  return instance;
};

var Binarymethods ={};
Binarymethods.insert= function(value){
	if(value<this.value){		
		if(this.left){
			this.left.insert(value);			
		}
		else{
			value = BinarySearchTree(value);
			this.left= value;
		}
	}
	else {
		if(this.right){
		  this.right.insert(value);		
		}
		else{
			value = BinarySearchTree(value);
			this.right= value;	
		}
	}
};
Binarymethods.contains = function(value){
	if (value === this.value){return true;}
	else if(value<this.value&&this.left){return this.left.contains(value);}
	else if(this.right){return this.right.contains(value);}
	else{return false;}
};
Binarymethods.depthFirstLog=function(fun){
	fun(this.value);
	if(this.left){this.left.depthFirstLog(fun);}
	if(this.right){this.right.depthFirstLog(fun);}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
