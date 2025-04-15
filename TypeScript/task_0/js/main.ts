interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: "Walter",
    lastName: "White",
    age: 50,
    location: "Albuquerque"
}

const student2: Student = {
    firstName: "Jesse",
    lastName: "Pinkman",
    age: 25,
    location: "Albuquerque"
}

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    nameCell.textContent = `${student.firstName}`;
    locationCell.textContent = `${student.location}`;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
