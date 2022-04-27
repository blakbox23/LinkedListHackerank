class SinglyLinkedListNode {
    constructor(element){
        this.element = element;
        this.next = null
    }
}

function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data)
    newNode.next = head;
    head = newNode;
    return head
}