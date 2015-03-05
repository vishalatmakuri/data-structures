var Queue = function(){
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value; 
    size++;
  };

  someInstance.dequeue = function(){
    size && size--;
    var temp = storage[0];
    delete storage[0];
    var count = 0;
    var tempStorage = {};

      for(var key in storage){
        tempStorage[count]=storage[key];
        count++;
      }
      storage = tempStorage; 
    return temp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
