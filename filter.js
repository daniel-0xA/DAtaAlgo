"use strict"                                                        //strts the strict-mode

let json = require('./data1.json')                                  //variable json contain values of data1.json
let usefull = []                                                    //creates the array usefull
let timediffArr = []                                                //creates the empty array timediffArr
let timeprev = 0                                                    //creates the var. timeprev with the value 0
let umsatzdiffArr = []
let umsatzprev = 0
let totaltime = 0
let totalelements = 0
let summe = 0
let gleich = []
let element2 = 0

json.forEach(element => {                                           //creates for the ar.json a forEach-Loop
    if (element.umsatz) {                                           //set in the if-Loop the condition that also the umsatz should be included
        usefull.push(element)                                       //if the element has umsatz in than he add it to the array usefull 
    }
});

usefull.forEach(element => {                                        //creates for the array usefull a forEach-Loop
    let date1 = element.date                                        //gives the var. date1 the value of the date of the element
    let time1 = element.time                                        //gives the var. time1 the value of the time of the element
    let date = new Date(date1 + 'T' + time1 + 'Z')                  //writes date and time in datelanguage that js knows
    let milli = date.getTime()                                      //writes date in millisec.
    let timediff = milli - timeprev                                 //subtracts milli from timeprey
    timeprev = milli                                                //writes in the var. timepev the value of milli, that milli can be subtract from the previous value
    timediffArr.push(timediff)                                      //add the difference in the array timediffArr
});

usefull.forEach(element => {
    let umsatz1 = element.umsatz
    if (typeof umsatz1 === 'string') {
        const str = umsatz1.replace(" ", "")
        umsatz1 = parseInt(str)
    }
    let umsatz = umsatz1 - umsatzprev
    umsatzprev = umsatz1
    umsatzdiffArr.push(umsatz)
});
timediffArr.shift()                                                 //deletes the first value of timediffARR, because it´s the value of the first number
umsatzdiffArr.shift()

for (let y = 0; y < timediffArr.length; y++) {
    timediffArr.forEach(element => {
        if (totaltime < 60000) {
            totaltime += element
            totalelements++
        }
    });
    
    for (let i = 0; i < totalelements; i++) {
        let umsatz1 = usefull[i].umsatz
        if (typeof umsatz1 === 'string') {
            const str = umsatz1.replace(" ", "")
            umsatz1 = parseInt(str)
        }
        summe = summe + umsatz1
    }
}




umsatzdiffArr.sort(function(a,b) {
    return a - b;
});
umsatzdiffArr.forEach(element => { 
    if (element2 - element != 0){
        gleich.push(element2)
    }
    element2 = element 
});
gleich.shift()
console.log(gleich)