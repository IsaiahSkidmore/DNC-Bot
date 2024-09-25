// Function to add phone number to DNC list (localStorage)
function addToDNC() {
    let phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber) {
        let dncList = JSON.parse(localStorage.getItem('dncList')) || []; // Get existing DNC list or create a new one
        dncList.push(phoneNumber); // Add number to the list
        localStorage.setItem('dncList', JSON.stringify(dncList)); // Save updated list to localStorage
        alert(`${phoneNumber} has been added to the DNC list.`);
    } else {
        alert("Please enter a phone number.");
    }
}

// Function to dial a phone number
function dialNumber() {
    let phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber) {
        let dncList = JSON.parse(localStorage.getItem('dncList')) || []; // Get existing DNC list

        if (dncList.includes(phoneNumber)) {
            alert("This number is on the DNC.");
        } else {
            alert("Dialing...");
        }
    } else {
        alert("Please enter a phone number.");
    }
}

document.getElementById("dncButton").addEventListener("click", addToDNC);
document.getElementById("callButton").addEventListener("click", dialNumber);