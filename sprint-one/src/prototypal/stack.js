var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.total = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
	this.storage[this.total] = value;
	this.total++;
};

stackMethods.pop = function(){
	this.total && this.total--;
	var temp = this.storage[this.total];
	delete this.storage[this.total];
	return temp;
};

stackMethods.size = function(){
	return this.total;
};
