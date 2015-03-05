var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.total = 0;
  instance.store={};
  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {};

stackMethods.size=function () {
	return this.total;
};
stackMethods.push=function(value) {
	this.store[this.total]= value;
	this.total++;
}

stackMethods.pop=function() {
	this.total&&this.total--;
	var temp = this.store[this.total];
	delete this.store[this.total];
	return temp;
}