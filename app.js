// INPUTS AND RESULT AREAS

const dayInput = document.querySelector("#day-input")
const monthInput = document.querySelector("#month-input")
const yearInput = document.querySelector("#year-input")
const yearResultArea = document.querySelector("#years")
const monthResultArea = document.querySelector("#months")
const dayResultArea = document.querySelector("#days")



// LABELS 

const dayLabel = document.querySelector("#day-label")
const monthLabel = document.querySelector("#month-label")
const yearLabel = document.querySelector("#year-label")

// ERRORS ELEMENTS

const dayErrorInvalid = document.querySelector("#day-error-invalid")
const monthErrorInvalid = document.querySelector("#month-error-invalid")
const yearErrorInvalid = document.querySelector("#year-error-invalid")
const dayErrorEmpty = document.querySelector("#day-error-empty")
const monthErrorEmpty = document.querySelector("#month-error-empty")
const yearErrorEmpty = document.querySelector("#year-error-empty")
const dayErrorWhole = document.querySelector("#day-error-whole")

// BUTTON

const button = document.querySelector("svg")

// DATES FUNCTION

const DateNow = new Date
function DateUser() {
    var day = dayInput.value * 1
    var month = monthInput.value * 1
    var year = yearInput.value * 1
    const dateUser = new Date(year, month - 1, day)
    return dateUser
} 


const monthsDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
}

function countAge(date1, date2) {

    var newDate1 = new Date(date1)
    var newDate2 = new Date(date2)
    let monthNow = newDate1.getMonth()
    let monthUser = newDate2.getMonth()
    let dayNow = newDate1.getDate()
    let dayUser = newDate2.getDate()
    let months = 0
    let days = 0

    let years = newDate1.getFullYear() - newDate2.getFullYear();
    if (monthNow < monthUser) {
        years = years - 1
        for(let i = monthNow; i < monthUser; i++) {
            months += 1
        }
        months = 12 - months
    } else if (monthNow > monthUser) {
        for(let i = monthNow; i > monthUser; i--) {
            months += 1
        }
    }

    if (dayNow < dayUser) {
        months -= 1
        if (monthsDays[monthNow + 1] == 31) {
            for(i = dayUser; i > dayNow; i--) {
                days += 1
            }
            days = 31 - days
        } else if (monthsDays[monthNow + 1] == 30) {
            console.log("i")
            for(i = dayUser; i > dayNow; i--) {
                days += 1
            }
            days = 30 - days
        } 
    } else if (dayNow > dayUser) {
        for(i = dayNow; i > dayUser; i--) {
            days += 1
        }
    }

    return {
        day : days,
        month : months,
        year : years
    }
}

function verifyDayEmpty() {
    if (dayInput.value == '') {
        dayErrorEmpty.classList.add("error") 
        dayInput.classList.add("errorInput")
        dayLabel.classList.add("errorLabel")
        verifyMonthEmpty()
    } else {
        dayErrorEmpty.classList.remove("error") 
        dayInput.classList.remove("errorInput")
        dayLabel.classList.remove("errorLabel")
        verifyMonthEmpty()
    }
}

function verifyMonthEmpty() {
    if (monthInput.value == '') {
        monthErrorEmpty.classList.add("error")
        monthInput.classList.add("errorInput")
        monthLabel.classList.add("errorLabel")
        verifyYearEmpty()
    } else {
        monthErrorEmpty.classList.remove('error')
        monthInput.classList.remove('errorInput')
        monthLabel.classList.remove('errorLabel')
        verifyYearEmpty()
    }
}

function verifyYearEmpty() {
    if (yearInput.value == '') {
        yearErrorEmpty.classList.add("error")
        yearInput.classList.add("errorInput")
        yearLabel.classList.add("errorLabel")
    } else {
        yearErrorEmpty.classList.remove("error")
        yearInput.classList.remove("errorInput")
        yearLabel.classList.remove("errorLabel")
        console.log('passou')
    }
}

button.addEventListener("click", () => {
    const Age = countAge(DateNow, DateUser())
    yearResultArea.innerHTML = Age.year
    monthResultArea.innerHTML = Age.month
    dayResultArea.innerHTML = Age.day
}
)







