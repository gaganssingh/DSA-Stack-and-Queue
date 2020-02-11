class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

const starTrek = new Stack();
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");

function peek(stack) {
    if (!stack.top) {
        return;
    }
    return stack.top;
}

function isEmpty(stack) {
    if (!stack.top) {
        console.log("Stack is empty");
        return;
    }
    return "Stack is not empty";
}

function display(stack) {
    if (!stack.top) {
        console.log("Stack is empty");
        return;
    }
    let current = stack.top;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
    return;
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
