interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;

}

const student1: Student = {
    firstName: "Fidel",
    lastName: "Adar",
    age: 21,
    location: "Nairobi"
};

const student2: Student = {
  firstName: "Bandile",
  lastName: "Buhle",
  age: 23,
  location: "Johannesburg"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHead = document.createElement('thead');
const headerRow = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');

th1.textContent = "First Name";
th2.textContent = "Location";

headerRow.appendChild(th1);
headerRow.appendChild(th2);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
const row = document.createElement("tr");
const nameCell = document.createElement("td");
const locationCell = document.createElement("td");

nameCell.textContent = student.firstName;
locationCell.textContent = student.location;

row.appendChild(nameCell);
row.appendChild(locationCell);
tableBody.appendChild(row);

})

table.appendChild(tableBody);
document.body.appendChild(table);