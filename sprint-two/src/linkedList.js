var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    value = new Node(value);
    if(list.head === null){
      list.head = value;
    }
    if (list.tail){
      list.tail.next = value;
    }
    list.tail = value;
    return list.tail;
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target){
    var control = list.head;
    var result =  false;
    while (control){
       if(control.value === target){
        result=true;
        break;
       }
       control = control.next;
    }
    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
