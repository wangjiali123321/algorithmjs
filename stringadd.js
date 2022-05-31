function accAdd(arg1,arg2){  
    var r1,r2,m;  
    try{
        r1=arg1.toString().split(".")[1].length
    } catch(e){
        console.log(e)
        r1=0
    }  
    try{
        r2=arg2.toString().split(".")[1].length
    }catch(e){
        console.log(e)
        r2=0
    }  
    console.log('arg1',arg1,'arg2',arg2)
    console.log('r1',r1,'r2',r2)
    m=Math.pow(10,Math.max(r1,r2))  
    console.log('m',m)
    return (arg1*m+arg2*m)/m  
} 

console.log(accAdd('11.2','88.966')) 
  
console.log('845221'*1+'88966'*1) 