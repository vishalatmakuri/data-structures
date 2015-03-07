
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit); //
  var item = [k,v];
  var bucket =[];
  var temp = this._storage.get(i);//[[v,v],[i,i]]
  bucket.push(item);
  if(temp){
    temp.push(item);
    this._storage.set(i, temp)  
  }
  else{
    this._storage.set(i,bucket);
  }
  
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  	for(var i = 0; i < temp.length; i++){
  		if (temp[i][0] === k){
  			return temp[i][1];
  		}
  	}
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  for(var x=0; x<temp.length;x++){
    if(temp[x][0]===k){
      temp[x][1]=null;
      break;
    }
  }
  this._storage.set(i,temp);
  //});
};

//main =[[["bob","3840"],["robert",9847987]],[["google","money"],["superman","Help"]]]
//temp=[["bob","3840"],["robert",9847987]]
//temp=[["robert",9847987]]
//[b,e,r].splice(1,1)=[b,r]
/*
 * Complexity: What is the time complexity of the above functions?
 */
