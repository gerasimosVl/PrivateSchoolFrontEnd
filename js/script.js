
// function addRowTrainer() {
    
//     let firstName = document.getElementById('trainer-fname').value;
//     let lastName = document.getElementById('trainer-lname').value;
    
//         let table = document.getElementById('tableTrainer').getElementsByTagName('tbody')[0];

//         let newRow = tableTrainer.insertRow();


//         let firstNameCell = newRow.insertRow(0);
//         let lastNameCell = newRow.insertRow(1);

//         let firstNameNode = document.createTextNode(firstName);
//         let lastNameNode = document.createTextNode(lastName);

//         firstNameCell.append(firstNameNode);
//         lastNameCell.append(lastNameNode);
        
//     }

const name = document.getElementById('name');
const lastName = document.getElementById('lastname');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    e.preventDefault

})