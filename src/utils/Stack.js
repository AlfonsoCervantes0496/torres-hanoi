class Node {
  constructor(value) {
    this.id = `Tile-${value}`;
    this.value = value;
    this.width = 2 * value;
    this.next = null;
  }
}

class Stack {
  constructor(maxLen) {
    this.top = null;
    this.bottom = null;
    this.maxLen=maxLen
    this.len = 0

    
  }

  push(value) {
    const nNode = new Node(value)
    if(!this.top){
      this.top = nNode
      this.next = nNode
    }
    else{
      nNode.next=this.top
      this.top = nNode
    }
    this.len++
    return this

  }

  peek() {
    return this.top

  }

  pop() {
    if(this.length >0){
      let topNode=this.top
      this.top=topNode.next
      this.length--
    
  return topNode
}
  }

  traverse() {
    let list = [];
    let cNode = this.top
    while(cNode){
      list.push(cNode)
      cNode = cNode.next
    }
    return list;
  }
}

export default Stack;
