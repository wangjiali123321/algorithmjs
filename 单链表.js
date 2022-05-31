//1
// 遍历链表,将链表各节点添加至哈希表中,添加前判断此节点是否已存在哈希表中,存在的话说明链表中存在环.
function judge(list){
    var set = new Set();

    while(list){
        if(set.has(list)){
            console.log('存在环');
            console.log(list);
            return true;
        }
        
        set.add(list);
        list = list.next;
    }

    return set;
}
//2
// 遍历链表,每访问一个新节点,使其visited为1,每次访问节点前先判断其visited是否为1,为1则是已访问过的节点,
function LinkedList(){
    var Node = function(element){
        this.element = element;
        this.next = null;
        this.visited = 0;
    }
}
function judge(){
    while(list){
        if(list.visited){
            console.log('存在环',list);
            console.log(list);
            return true;
        }
        list.visited = 1;
        list = list.next;
    }
}

//3
// 快慢指针法,设定快指针fast,慢指针slow,每次循环快指针fast移动两个位置,慢指针移动一个位置
function judge(list){
    var fast = list.next.next;
        slow = list.next;
    while(list){
        if(fast === slow){
            console.log('存在环');
            console.log('fast:',fast);
            console.log('slow:',slow);
            return true
        }
        fast = fast.next.next;
        slow = slow.next;
    }
}
