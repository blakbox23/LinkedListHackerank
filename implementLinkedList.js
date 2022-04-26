class Node {
    constructor(element){
    this.element = element
    this.next = null
    }
  }
  
  class Linkedlist{
    constructor(){
    this.head = null
    this.size = 0
    }
  
    add(element){
      //create a node from the element
      let node = new Node(element)
      //check whether there is a head
      if(this.head == null){
        this.head = node
      }else{
        //if head exists
        let current = this.head
        while(current.next){
          current = current.next
        }
        current.next = node
      }
      this.size++
      //increament size
    }
  
   addAt(element, index){
    
    //check whether index is valid
    if(index < 0 || index > this.size ){
     return console.log("wacha ufala")
    }
  
     //create a node from the element
    let node = new Node(element)
  
    //check whether index is 0
    let cur, prev
    if(index == 0) {
      node.next = this.head
      this.head = node
    }else{
        cur = this.head
  
      let it = 0
      while(it < index){
        prev = cur
        cur = cur.next
        it++
      }
      node.next = cur
      prev.next = node
  
    }
    this.size++
   }
  
   removeFrom(index){
     //check index is valid
     if(index<0 || index >= this.size){
       return console.log('use a valide index')
     }
  
     let current = this.head;
     let prev, it=0;
  
     //if index is 0
     if(index == 0){
       this.head = current.next
     }else{
      //if index not 0 iterate and removeFrom
       while(it<index){
         prev = current
         current = current.next
         it++
       }
       prev.next = current.next
     }
     //decreament size
     this.size--
     //return current.element
     return current.element
  
   }
  
   remove(element){
     //set up prev and curr
     let curr = this.head
     let prev
     //check if elment is head and remove
     if(this.head.element == element){
       this.head = curr.next
     }else{
     //if not head iterate to find element
     while(curr.element != element){
       prev = curr
       curr = curr.next
      }
     //remove found element
      prev.next = curr.next
      this.size--
     }
     //return remove element
     return curr.element
  
   }
  
   // prints the list items
  printList()
  {
      var curr = this.head;
      var str = "";
      while (curr) {
          str += curr.element + " ";
          curr = curr.next;
      }
       console.log(str);
  }
  
  // reverse(){
    
  //   let current = this.head;
    
  // while(current != null){
  //   nextNode = current.next;
  //   current.next = prevNode;
  //   prevNode = current;
  //   current = nextNode
  // }  
  //   return prevNode
  // }
  }
  
  let list = new Linkedlist