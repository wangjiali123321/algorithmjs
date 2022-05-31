function msToDate (msec) {
    let datetime = new Date(msec);
    let year = datetime.getFullYear();
    let month = datetime.getMonth();
    let date = datetime.getDate();
    let hour = datetime.getHours();
    let minute = datetime.getMinutes();
    let second = datetime.getSeconds();

    let result1 = year + 
                '-' + 
                ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + 
                '-' + 
                ((date + 1) < 10 ? '0' + date : date) + 
                ' ' + 
                ((hour + 1) < 10 ? '0' + hour : hour) +
                ':' + 
                ((minute + 1) < 10 ? '0' + minute : minute) + 
                ':' + 
                ((second + 1) < 10 ? '0' + second : second);

    let result2 = year + 
                '-' + 
                ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + 
                '-' + 
                ((date + 1) < 10 ? '0' + date : date);

    let result = {
        hasTime: result1,
        withoutTime: result2
    };

    return result;
}

let myDate1 = '2017-09-19';
let myDate2 = '2017-09-19 20:00:00';

//实现方法
function dateToMs (date) {
    let result = new Date(date).getTime();
    return result;
}

//例子

console.log(dateToMs(myDate1));//--->1505779200000
console.log(dateToMs(myDate2));//--->1505779400000
let myTime1 = dateToMs(myDate1);
let myTime2 = dateToMs(myDate2);
console.log(msToDate(myTime1).hasTime);//--->2017-10-23 17:20:13
console.log(msToDate(myTime1).withoutTime);//--->2017-10-23
console.log(msToDate(myTime2).hasTime);//--->2017-09-19 08:00:00
console.log(msToDate(myTime2).withoutTime);//--->2017-09-19