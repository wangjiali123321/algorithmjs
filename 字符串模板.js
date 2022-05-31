function render(template, data) {    
    const reg = /\{\{(\w+)\}\}/;     
    if (reg.test(template)) {    
        console.log(reg.exec(template))    
        const name = reg.exec(template)[1];        
        template = template.replace(reg, data[name]);   
        console.log(template)     
        return render(template, data); 
    }    
    return template; 
}

let template = '我是{{name}}，职业{{job}}，工资{{salary}}';
let person = { name: '阿巴', job: '前端', salary:30000};
console.log(render(template, person)); // 我是阿巴，职业前端，工资30000
