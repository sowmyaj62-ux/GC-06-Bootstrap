// Function to capitalize the first letter
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateDetails() {
    let input = document.getElementById("empInput").value.trim();
    let employees = input.split(" "); // split by space

    let result = "";

    employees.forEach(emp => {
        let [first, last] = emp.split("_"); 

        let email = `${first}.${last}@abc.com`;
        let username = `${first}${capitalize(last)}`;
        let password = `${last}#${capitalize(first)}`;

        result += `
            Name: ${capitalize(first)} ${capitalize(last)} <br>
            Email: ${email} <br>
            Username: ${username} <br>
            Password: ${password} <br><br>
        `;
    });

    document.getElementById("output").innerHTML = result;
}
