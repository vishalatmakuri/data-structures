var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 this.store={};
 this.total=0;

};
Stack.prototype.size = function() {
	return this.total;
};
Stack.prototype.push= function(value){
	this.store[this.total]=value;
	this.total++;
};
Stack.prototype.pop=function(){
	this.total&&this.total--;
	var temp=this.store[this.total];
	delete this.store[this.total];
	return temp;
};

