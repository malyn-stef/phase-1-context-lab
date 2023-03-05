/* Your Code Here */
const createEmployeeRecord = (array) => {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

}
const createEmployeeRecords = (arrays) => {
    return arrays.map(array => createEmployeeRecord(array))
}

const createTimeInEvent = function (dateTimeString) {
    const [date, time] = dateTimeString.split(' ')
    let newTimeInEvent = {
        type: "TimeIn",
        hour: parseInt(time),
        date: date,
    }
    this.timeInEvents.push(newTimeInEvent)
    return this
}

const createTimeOutEvent = function (dateTimeString) {
    const [date, time] = dateTimeString.split(' ')
    let newTimeOutEvent = {
        type: "TimeOut",
        hour: parseInt(time),
        date: date,
    }
    this.timeOutEvents.push(newTimeOutEvent)
    return this
}

const hoursWorkedOnDate = function (date) {
    let timeInEvent = this.timeInEvents.map(array => array)
    let timeOutEvent = this.timeOutEvents.map(array => array)
    let timeInHour;
    let timeOutHour;
    for (let log in timeInEvent) {
        if (date === timeInEvent[log]["date"]) {
            timeInHour = timeInEvent[log]["hour"]
        }
    }
    for (let log in timeOutEvent) {
        if (date === timeOutEvent[log]["date"])
            timeOutHour = timeOutEvent[log]["hour"]
    }
    return (timeOutHour - timeInHour) / 100
}

const wagesEarnedOnDate = function (date) {
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour)
}

const findEmployeeByFirstName = function (collection, string) {
    return collection.find(string => string)
}
const calculatePayroll = function (array) {
    return array.reduce((totalAmount, rec) => totalAmount + allWagesFor.call(rec), 0)

}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

