var myLinkedList = function() {
    var length = 0;
    var head = null;

    var Node = function(element) {
        this.element = element;
        this.next = null;
    };

    this.size = function() {
        return length;
    };

    this.head = function() {
        return head;
    };

    this.add = function(element) {
        var node = new Node(element);
        if(head === null) {
            head = node;
        } else {
            var currrentNode = head;
            while(currrentNode.next) {
                currrentNode = currrentNode.next;
            }
            currrentNode.next = node;
        }
        length++;
    };
    
    this.remove = function(element) {
        var currrentNode = head;
        var previousNode;
        if(currrentNode.element === element) {
            head = currrentNode.next;
        } else {
            while(currrentNode.element !== element) {
                previousNode = currrentNode;
                currrentNode = currrentNode.next;
            }
            previousNode.next = currrentNode.next;
        }
        length--;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.indexOf = function(element) {
        var index = -1;
        var currrentNode = head;
        while(currrentNode) {
            index++;
            if(currrentNode.element === element) {
                return index;
            }
            currrentNode = currrentNode.next;
        }
        return -1;
    };

    this.elementAt = function(index) {
        var currentNode = head;
        var count = 0;
        while(count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    };

    this.addAt = function(element, index) {
        var node = new Node(element);
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        
        if(index > length) {
            return false;
        }
        
        if(index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    };

    this.removeAt = function(index) {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        
        if(index < 0 || index >= length) {
            return false;
        }

        if(index === 0) {
            head = currentNode.next;
        }
        else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }

    this.printList = function() {
        var currentNode = head;
        var str = "";
        while(currentNode != null) {
            str+= currentNode.element + " ";
            currentNode = currentNode.next;
        }
        console.log(str);
    }
}

var Pokemon = new myLinkedList();
Pokemon.add('Pikachu');
Pokemon.add('Raichu');
Pokemon.add('Squirtle');
Pokemon.add('Bastoise');
console.log(Pokemon.size());
Pokemon.removeAt(3);
console.log(Pokemon.size());
Pokemon.addAt('Charmander', 2);
console.log(Pokemon.size());
console.log(Pokemon.elementAt(1));
Pokemon.printList();
