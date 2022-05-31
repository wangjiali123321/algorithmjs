function LRUCache(capacity) {

  this.capacity = capacity//缓存容量
  this.map = {}//记录缓存的节点
  this.list = new DoubleLinkList(this.capacity)//实现双向链表 
 
  //获取使用的节点
  this.get = function (getKey) {
    let flag = false
    //判断缓存中是否有该节点
    for (const key in this.map) {
      if (this.map.hasOwnProperty(key)) {
        //缓存中有该节点 返回节点值 并将该节点提升至链表头部
        if (key == getKey) {
          let node = this.map[key]
          this.list.remove(node)
          this.list.appendFront(node)
          flag = true
          return node.value
        }
      }
    }
    //缓存中没有该节点 返回-1
    if (!flag) {
      return -1
    }
  }
  //向缓存中存放节点
  this.put = function (getKey, value) {
    let flag = false
    //缓存中是否有该节点
    for (const key in this.map) {
      if (this.map.hasOwnProperty(key)) {
        //将节点提升至链表头部
        if (key === getKey) {
          let node = this.map[key]
          this.list.remove(node)
          node.value = value
          this.list.appendFront(node)
          flag = true
          return node.value
        }
      }
    }
    //缓存中不存在该节点
    if (!flag) {
      node = new Node(getKey, value)
      //判断缓存容量是否已满
      if (this.list.size >= this.list.capacity) {
        //删除末尾节点，删除map记录的缓存节点
        let old_node = this.list.remove()
        delete this.map[old_node.key]
      }
      //将节点添加至头部
      this.list.appendFront(node)
      this.map[getKey] = node
    }
  }
  this.print = function () {
    this.list.print()
  }
}