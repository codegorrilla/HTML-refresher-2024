//using switch statement

//what is the day
let day

switch(new Date().getDay()){
    case 0:
        day = "Sunday"
        break
    case 1:
        day = "Monday"
        break
    case 2:
        day = "Tuesday"
        break
    case 3:
        day = "Wednesday"
        break
}

document.querySelector(".today").innerHTML = day

//fruits
let fruit = "Apple";

switch(fruit){
    case "Banana":
        fruit = "Banana"
        break
    case "Apple":
        fruit = "Apple"
        break

    default:
        fruit = "Berries"
}

document.querySelector(".fruit").innerHTML = fruit

//date object
const d = new Date("1970-01-02")

document.querySelector(".date").innerHTML = d

//output date as a name
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const date = new Date()

const today = days[date.getDay()]

document.getElementById("today").innerHTML = today

//output current month as name
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const date2 = new Date()

const currMonth = months[date2.getMonth()]

document.getElementById("month").innerHTML = "the current month is: " + currMonth

//find out the current age of a person


//Date.parse
const msec = Date.parse("March 14, 2024")

console.log(msec)

const newMsecDate = new Date(msec)

document.querySelector(".msecToDate").innerHTML = newMsecDate


const d2 = Date.now()

console.log(d2)

const nowDate = new Date(d2)

console.log(nowDate)

const d3 = new Date()

const showDate2 = d3.getDay()

console.log("Today is: " + days[showDate2])

document.querySelector(".dateNow").innerHTML = "Today is: " + days[showDate2]


//using JSON



