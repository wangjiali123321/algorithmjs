let Animal = function (type){
    this.type = type;
    this.eat = function(){
        console.log('I am eat');
    }
}
let monkey1 = new Animal('monkey');
console.log(monkey1);

  
class Animal1{
    constructor (type) {
      this.type = type;
    }

    eat(){
      console.log('I am eat');
    }
}
let monkey2 = new Animal1('monkey');
console.log(monkey2);
