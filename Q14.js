//  Date function in javaScript

let myDate=new Date()
console.log(typeof myDate) //datatype object not datatype is date 
console.log(myDate) //2025-10-10T03:28:16.563Z
console.log(myDate.toString()) //Fri Oct 10 2025 03:29:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())//Fri Oct 10 2025
console.log(myDate.toISOString()) //2025-10-10T03:30:23.483Z
console.log(myDate.toJSON()) //2025-10-10T03:31:13.501Z
console.log(myDate.toLocaleDateString()) //10/10/2025
console.log(myDate.toLocaleString()) //10/10/2025, 3:32:40 AM


// set the new date useing date function

let newDate=new Date(2025,0,12) //why to start the 0 month because javaScript in Month start to tha 0 means first Month(jan)  and this to array formate becaue month start to the 0
console.log(newDate.toLocaleDateString()) //1/12/2025  print to jan month print  because start to the the 0 month in javaScript

//add time in data formate
let newDateWithTime=new Date(2025,0,12,3,45) //1/12/2025, 3:45:00 AM 3=>to h and 45=> to min
console.log(newDateWithTime.toLocaleString());

//formate to print date yyyy/dd/mm
// note: this formate in month start to the 1 not start to the 0 
let newDateFormat=new Date("2025-02-12")
console.log(newDateFormat.toLocaleDateString())

//formate to print date mm/dd/yyyy
let newDateFormat2=new Date("01-02-2025")
console.log(newDateFormat2.toLocaleDateString())

//date to declere now date  output is milisecond 
let time=Date.now()
console.log(time)
console.log(myDate.getTime())

console.log(Math.floor(Date.now()/1000))

//date customize 

newDate.toLocaleDateString('default',{
    weekday:"long",
    timeZone:""
})