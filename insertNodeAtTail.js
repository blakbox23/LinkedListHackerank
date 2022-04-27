class SinglyLinkedListNode {
    constructor(element){
        this.element = element;
        this.next = null
    }
}

function insertNodeAtTail(head, data) {
    let newNode = new SinglyLinkedListNode(data)
    
    if(!head){
        head = newNode
        return head
    }else{
    let current = head;
    while(current.next){    
        current=current.next;
    }
    current.next = newNode;
    return head
    }
}