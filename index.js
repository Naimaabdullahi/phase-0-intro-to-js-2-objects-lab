const employee = {
    "name": "Sam",
    "streetAddress": "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = {...employee}

    newemployee[key] = value;
    return newemployee
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    employee[key];
    const {name, ...newemployee} = employee

    return newemployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key]
    delete employee.name
    return employee
}
//employee = {
    //"name": "Sam",
    //"streetAddress":"11 Broadway"
//}