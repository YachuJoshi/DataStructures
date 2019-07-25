// STACK: LAST IN FIRST OUT
var Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
        return value;
    }

    this.pop = function() {
        if(this.count == 0) {
            return null;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();
console.log(myStack.push(4) + " is pushed to stack.");
console.log(myStack.push(5) + " is pushed to stack.");
console.log(myStack.peek());
console.log(myStack.pop() + " is poped." );
console.log(myStack.peek());
console.log(myStack.push("YACHU JOSHI"));
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop() + " is removed from stack.");
