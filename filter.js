
// var first = {"id":552,"volume":30,"price":"28,695"}
// var ideal = {"id":552,"price":"28,695","umsatz":30,"date":"2020-04-07","time":"08:28:18.975"}

// if (ideal.umsatz) {
//     console.log(first)
// }
// else
//     console.log("aaaaa")

var json = require('./data1.json')
json.forEach(element => {
    // console.log(element)
    if (element.umsatz){
        console.log(element)
    }
});