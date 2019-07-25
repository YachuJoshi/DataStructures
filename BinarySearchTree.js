class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if(node === null) {
            this.root = new Node(data);
        } else {
            const searchTree = function(node) {
                if(data < node.data) {
                    if(node.left === null) {
                        node.left = new Node(data);
                    } else if(node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if(data > node.data) {
                    if(node.right === null) {
                        node.right = new Node(data);
                    } else if(node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }   
        return searchTree(node);
        }
    }

    findMin() {
        let currentNode = this.root;
        while(currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.data;
    }

    findMax() {
        let currentNode = this.root;
        while(currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }

    isPresent(data) {
        let currentNode = this.root;
        while(currentNode !== null) {
            if(data == currentNode.data) {
                return true;
            }
            if(data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = function(node, data) {
            if(node === null) {
                return null;
            }
            if(data == node.data) {
                if(node.left === null && node.right === null) {
                    return null;
                }
                else if(node.left === null) {
                    return node.right;
                }
                else if(node.right === null) {
                    return node.left;
                }
                var tempNode = node.right;
                while(tempNode.left) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);            
            } else if(data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if(data > node.data) {
                node.right = removeNode(node.right,data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}
