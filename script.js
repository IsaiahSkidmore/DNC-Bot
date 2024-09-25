// Function to add phone number to DNC list (localStorage)
function addToDNC() {
    let phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber) {
        let dncList = JSON.parse(localStorage.getItem('dncList')) || []; // Get existing DNC list or create a new one
        dncList.push(phoneNumber); // Add number to the list
        localStorage.setItem('dncList', JSON.stringify(dncList)); // Save updated list to localStorage
        alert(`${phoneNumber} has been added to the DNC list.`);
    } else {
        document.getElementById("enterNumber-modal").style.display = "block";
    }
}

// Function to dial a phone number
function dialNumber() {
    let phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber) {
        let dncList = JSON.parse(localStorage.getItem('dncList')) || []; // Get existing DNC list

        if (dncList.includes(phoneNumber)) {
            document.getElementById("dnc-modal").style.display = "block";
        } else {
            alert("Dialing...");
        }
    } else {
        document.getElementById("enterNumber-modal").style.display = "block";
    }
}


document.getElementById("dncButton").addEventListener("click", addToDNC);
document.getElementById("callButton").addEventListener("click", dialNumber);

// Close modal

document.getElementById("close-button-dnc").addEventListener("click", function() {
    document.getElementById("dnc-modal").style.display = "none";
});

document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("enterNumber-modal").style.display = "none";
});

