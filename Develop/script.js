// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let addEmployee = window.confirm("Would you like to add another employee?");
  
  while(addEmployee){
  let firstName = window.prompt("Enter first name:");  
  let lastName = window.prompt("Enter last name:");  
  let salary = parseFloat(window.prompt("Enter employee's salary:"));
  let userEmployee = firstName + lastName;
  let employeesArray = [];
  


  console.log(userEmployee);
  console.log(salary);
  addEmployee = window.confirm("Would you like to add another employee?");
  // Ends loop if user presses cancel
    if (isNaN(salary)){
      salary=0;
    }



  // Checks that the user input is a string
    // if (typeof userEmployee===""){
    // continue ;
    // } else {
    //   window.alert("Please enter an employee name.");
    // }

    // if (typeof salary === Number){
    //   continue ;
    // } else {
    //   window.alert("Please enter a salary.")
    // }

  const employees={
    firstName: firstName, 
    lastName: lastName, 
    salary: salary
      
    };
      
    employeesArray.push(employees);
    console.log(employeesArray);
      
}

}
// Display the average salary
employeesArray = [collectEmployees]
const displayAverageSalary = function(employeesArray) {
  const totalSalary = salaries.reduce((acc, curr) => acc+ curr, 0);
  const averageSalary = totalSalary / salaries.length;
  
  console.log("Average salary:", averageSalary.toFixed(2));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = Math.floor(Math.random() * collectEmployees.length);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
