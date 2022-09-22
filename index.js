// Write your solution in this file!
let employee ={
    name: 'soren' , 
    streetAddress:'my house'};


const updateEmployeeWithKeyAndValue = (employee, key, value) =>{
    let newObj = {...employee}
    newObj[key] = value
    return newObj;

}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value
    return employee;

}

const deleteFromEmployeeByKey = (employee, key) => {
    let newEmp = {...employee}
    delete newEmp[key]
    return newEmp;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee;
}