// Get elements
const [phoneNumberInput, addToDncModal, messageContainer, dialingModal, dncModal, enterNumberModal] = 
    ["phoneNumber", "addToDncModal", "messageContainer", "dialing-modal", "dnc-modal", "enterNumber-modal"]
    .map(id => document.getElementById(id));

// Get buttons
const [dncButton, callButton, closeButtonDnc, closeButton, closeDialButton, closeAddDnc] = 
    ["dncButton", "callButton", "close-button-dnc", "close-button", "close-dialButton", "close-addDnc"]
    .map(id => document.getElementById(id));

// Function to hide all modals
function hideAllModals() {
    [addToDncModal, dialingModal, dncModal, enterNumberModal].forEach(modal => modal.style.display = "none");
}

// Function to show a modal
function showModal(modal) {
    hideAllModals();
    modal.style.display = "block";
}

// Function to add a number to DNC
function addToDNC() {
    let phoneNumber = phoneNumberInput.value;
    if (phoneNumber) {
        let dncList = JSON.parse(localStorage.getItem('dncList')) || [];
        dncList.push(phoneNumber);
        localStorage.setItem('dncList', JSON.stringify(dncList));

        messageContainer.innerHTML = "";
        messageContainer.appendChild(document.createElement("p")).innerHTML = phoneNumber + " has been added to DNC list";

        showModal(addToDncModal);
    } else {
        showModal(enterNumberModal);
    }
}

// Function to dial a phone number
function dialNumber() {
    let phoneNumber = phoneNumberInput.value;
    if (phoneNumber) {
        let dncList = JSON.parse(localStorage.getItem('dncList')) || [];
        showModal(dncList.includes(phoneNumber) ? dncModal : dialingModal);
    } else {
        showModal(enterNumberModal);
    }
}

// Add event listeners
dncButton.addEventListener("click", addToDNC);
callButton.addEventListener("click", dialNumber);
closeButtonDnc.addEventListener("click", () => hideAllModals());
closeButton.addEventListener("click", () => hideAllModals());
closeDialButton.addEventListener("click", () => hideAllModals());
closeAddDnc.addEventListener("click", () => hideAllModals());