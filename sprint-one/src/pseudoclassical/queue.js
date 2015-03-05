var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.low = 0;
  this.high = 0;
};

Queue.prototype.total = function(){
  	return this.high - this.low;
}

Queue.prototype.size = function(){
	return this.total();
}

Queue.prototype.enqueue = function(value){
	this.storage[this.high] = value;
	this.high++;
}

Queue.prototype.dequeue = function(){
	this.total() && this.low++;
	var temp = this.storage[this.low - 1];
	delete this.storage[this.low - 1];
	return temp;
}


