//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    console.log('arguments',arguments)
    switch(arguments.length){ 
        case 1: 
            console.log('munNum',minNum,'Math.random()*minNum',Math.random()*minNum)
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            console.log('munNum',minNum)
            console.log('Math.random()*minNum',Math.random()*(maxNum-minNum+1))
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 