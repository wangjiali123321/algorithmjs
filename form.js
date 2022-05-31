
let a = [
    {
        "name": "titles",
        "value": "1"
    },
    {
        "name": "pics",
        "value": ""
    },
    {
        "name": "urls",
        "value": "111"
    },
    {
        "name": "titles",
        "value": "1"
    },
    {
        "name": "pics",
        "value": ""
    },
    {
        "name": "urls",
        "value": "111"
    }
]
console.log(a)
let o = {};
a.forEach((e)=> {
    console.log(o[e.name])
    if (o[e.name] || o[e.name] === '') {
        console.log(1)
        if (!o[e.name].push) {
            o[e.name] = [o[e.name]];
        }
        o[e.name].push(e.value || '');
    } else {
        console.log(2)
        o[e.name] = e.value || '';
    }
    console.log(o)
});
console.log('final',o)

// {
//     "titles": [
//         "1",
//         "1"
//     ],
//     "pics": "",
//     "urls": [
//         "111",
//         "111"
//     ]
// }



// $.fn.serializeObject = function () {
//     let o = {};
//     let a = this.serializeArray();
//     console.log(a)
//     $.each(a, function () {
//         // if (o[this.name]) {
//             if (!o[this.name].push) {
//                 o[this.name] = [o[this.name]];
//             }
//             o[this.name].push(this.value || '');
//         // } else {
//         //     o[this.name] = this.value || [];
//         // }
//     });
//     console.log(o)
//     return o;
// };