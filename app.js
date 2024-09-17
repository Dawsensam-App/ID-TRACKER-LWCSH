// Dictionary to store student IDs and their counts
let studentData = {};

// Function to track the student ID
function trackStudentId() {
    const studentId = document.getElementById("studentId").value;
    if (studentId) {
        // Increment count for the student ID or set to 1 if not already present
        if (studentData[studentId]) {
            studentData[studentId]++;
        } else {
            studentData[studentId] = 1;
        }
        updateReport();
        document.getElementById("studentId").value = ""; // Clear input after submission
    }
}

// Function to update the report table
function updateReport() {
    const tableBody = document.querySelector("#reportTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    for (let id in studentData) {
        const row = document.createElement("tr");
        const studentIdCell = document.createElement("td");
        const countCell = document.createElement("td");

        studentIdCell.textContent = id;
        countCell.textContent = studentData[id];

        row.appendChild(studentIdCell);
        row.appendChild(countCell);
        tableBody.appendChild(row);
    }
}

// Function to print the report
function printReport() {
    window.print();
}
