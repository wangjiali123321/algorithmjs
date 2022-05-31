function sum(a,b,c,d,e){
    return a+b+c+d+e //发生修改
}

function currysum(fn,...abs){
    var f = function(...nextabs){
        var combine = [...abs,...nextabs]
        return currysum(fn,...combine);//发生修改
    };
    f.valueof = function(){
        return fn.apply(null,abs);
    }
    return f;
}

let kexisum = currysum(sum)
kexisum(1,2,3)(4,5).valueof()
console.log(kexisum(1,2,3)(4,5).valueof())