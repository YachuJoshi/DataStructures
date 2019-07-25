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

