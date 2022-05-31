// let reg = ''
function render(template,person){
    let name = reg.exec(template)[1]
    render(template.replace(template,person[name]),person)
}

let template = '我是{{name}}，职业{{job}}，工资{{salary}}';
let person = { name: '阿巴', job: '前端', salary:30000};
console.log(render(template, person)); // 我是阿巴，职业前端，工资30000


1
function render(template,person){
    if(!reg.test(template))return template
    let name = reg.exec(template)[1]
    render(template.replace(template,person[name]),person)
}


2
let reg = /\{\{(\w+)\}\}/
function render(template,person){
    if(!reg.test(template))return template
    let name = reg.exec(template)[1]
    return render(template.replace(template,person[name]),person)
}
