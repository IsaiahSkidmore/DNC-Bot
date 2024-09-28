// Function to add phone number to DNC list (localStorage)
function addToDNC() {
    let phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber) {
        let dncList = JSON.parse(localStorage.getItem('dncList')) || []; // Get existing DNC list or create a new one
        let newP = document.createElement("p");
        let modal = document.getElementById("addToDncModal");
        dncList.push(phoneNumber); // Add number to the list
        localStorage.setItem('dncList', JSON.stringify(dncList)); // Save updated list to localStorage

        // Clear the modal
        modal.innerHTML = "";

        newP.innerHTML = phoneNumber + " added to DNC list";
        modal.appendChild(newP);
        modal.style.display = "block";
    } else {
        document.getElementById("dnc-modal").style.display = "none";
        document.getElementById("enterNumber-modal").style.display = "block";
    }
}

// Function to dial a phone number
function dialNumber() {
    let phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber) {
        let dncList = JSON.parse(localStorage.getItem('dncList')) || []; // Get existing DNC list

        if (dncList.includes(phoneNumber)) {
            document.getElementById("enterNumber-modal").style.display = "none";
            document.getElementById("dnc-modal").style.display = "block";
        } else {
            document.getElementById("dialing-modal").style.display = "block";
        }
    } else {
        document.getElementById("dnc-modal").style.display = "none";
        document.getElementById("enterNumber-modal").style.display = "block";
    }
}


document.getElementById("dncButton").addEventListener("click", addToDNC);
document.getElementById("callButton").addEventListener("click", dialNumber);

// Close modals

document.getElementById("close-button-dnc").addEventListener("click", function () {
    document.getElementById("dnc-modal").style.display = "none";
});

document.getElementById("close-button").addEventListener("click", function () {
    document.getElementById("enterNumber-modal").style.display = "none";
});

document.getElementById("close-dialButton").addEventListener("click", function () {
    document.getElementById("dialing-modal").style.display = "none";
});

document.getElementById("close-addDnc").addEventListener("click", function () {
    document.getElementById("addToDncModal").style.display = "none";
});



