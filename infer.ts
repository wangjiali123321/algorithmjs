

type ParamType<T> = T extends (parms:infer P) => any ? P : T;

type Caller<T extends (...args: any[]) => any> = () => ParamType<T>;

function tx(x:string){
    return x;
}

const caller: Caller<typeof tx> = () =>{
    return "x"
}



// 接收一个函数作为第一个参数，其返回参数类型由接收的函数参数决定


