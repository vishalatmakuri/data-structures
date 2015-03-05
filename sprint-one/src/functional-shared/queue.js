var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.total = 0;
  instance.store = {};
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.size = function(){
	return this.total;
}

queueMethods.enqueue = function(value){
	this.store[this.total] = value;
	this.total++;
}

queueMethods.dequeue = function(){
	this.total && this.total--;
	var temp = 0;
	var tempStore = this.store[0];
	delete this.store[0];
	var tempobj ={};
	_.each(this.store, function(value, key){
		tempobj[temp] = value;
		temp++; 
	});
	this.store = tempobj;
	return tempStore;
}


