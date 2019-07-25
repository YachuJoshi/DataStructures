var mySet = function() {
    var collection = [];

    this.has = function(value) {
        return (collection.indexOf(value) !== -1);
    }

    this.list = function() {
        return collection;
    }

    this.add = function(value) {
        if(!this.has(value)) {
            collection.push(value);
            return value;
        }
    }
  
    this.remove = function(value) {
        if(this.has(value)) {
            collection.splice(collection.indexOf(value), 1);
            return true;    
        }
        return false;
    }

    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.list();
        var secondSet = otherSet.list();
        firstSet.forEach(function(element) {
            unionSet.add(element);
        });
        secondSet.forEach(function(element) {
            unionSet.add(element);
        });
        return unionSet;
    }

    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.list();
        firstSet.forEach(function(element) {
            if(otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }

    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.list();
        firstSet.forEach(function(element) {
            if(!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });
        return differenceSet;
    }

    this.subset = function(otherSet) {
        var firstSet = this.list();
        return (firstSet.forEach(function(element){
                otherSet.has(element);
            })
        );
    }
}

var setA = new mySet();
var setB = new mySet();
for(var i=0; i<10; i++) {
    if(i%2 == 0) {
        setA.add(i);
    }
    else {
        setB.add(i);
    }
}
console.log(setA.list());
console.log(setB.list());
var unionSet = setA.union(setB);
console.log(unionSet.list());
