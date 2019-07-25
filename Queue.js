//Queue: FIRST IN FIRST OUT
var Queue = function() {
    var collection = [];
    
    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        collection.push(element);
    }

    this.dequeue = function() {
        collection.shift();
    }

    this.front = function() {
        return collection[0];
    }
    
    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length == 0);
    }
}

var myQueue = new Queue();
for(var i=0; i<=10; i++) {
    myQueue.enqueue(i);
}
myQueue.print();

var myPriorityQueue = function() {
    var collection = [];
    
    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        if(collection.isEmpty) {
            collection.push(element);
        }
        else {
            var added = false;
            for(var i=0; i<collection.length; i++) {
                if(element[1] <= collection[i][1]) {
                        collection.splice(i,0,element);
                        added = true;
                        break;
                    }   
                }
            if(!added) {
                collection.push(element);
            }
        }
    }
    this.dequeue = function() {
        collection.shift();
    }

    this.front = function() {
        return collection[0];
    }
    
    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length == 0);
    }
}

var myQueue = new myPriorityQueue();
myQueue.enqueue(['YACHU',2]);
myQueue.enqueue(['JOSHI',3]);
myQueue.enqueue(['HELLO', 1]);
myQueue.print();
