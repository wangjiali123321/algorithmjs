//master change
function getAllCombin(array,n,sum,temp){
  if(temp.length === n){
    if( temp.reduce((t,c)=>t+c) === sum ){
      return temp;
    }
    return false;
  }
  for(let i=0;i<array.length;i++){
    const current = array.shift();
    temp.push(current);
    console.log('temp',temp)
    const result = getAllCombin(array,n,sum,temp);
    console.log('result',result)
    if(result){
      return result;
    }
    temp.pop();
    array.push(current);
  }
}

const arr = [2,4,1,6,5,3];
console.log(getAllCombin(arr,3,10,[]))