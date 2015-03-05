var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.total=0;
  instance.store={};

  return instance;
};

var queueMethods = {};

queueMethods.size = function () {
	return this.total;
};
queueMethods.enqueue =function(value){
	this.store[this.total]=value;
	this.total++;
};
queueMethods.dequeue =function(){
	this.total && this.total--;
	var tempcount = 0;
	var tempobj = this.store[0];
	delete this.store[0];
	var tempstore = {}
	
	_.each(this.store,function(value, key){
		tempstore[tempcount] = value;
		tempcount++;
	});
	this.store = tempstore;
	return tempobj;
};
