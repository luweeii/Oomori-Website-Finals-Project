// RESERVATION FORM
document.getElementById('openFormButton').addEventListener('click', function() {
    event.preventDefault();
    document.getElementById('popupForm').style.display = 'block';
});

document.getElementById('openFormButtonFooter').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('popupForm').style.display = 'block';
});

document.getElementById('closeFormButton').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popupForm')) {
        document.getElementById('popupForm').style.display = 'none';
    }
});

document.getElementById('guests').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
    if (this.value > 100) {
        this.value = 100;
    }
});

document.getElementById('phone').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
    if (this.value.length > 11) {
        this.value = this.value.slice(0, 11);
    }s
});

function validateForm() {
    return true;
}

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        // Get form data
        var name = document.getElementById('name').value;
        var guests = document.getElementById('guests').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;

        // Form is valid, show success message
        alert('Hello ' + name + '!\n\nYou have successfully reserved a date with us on: '+ date + ' at: ' + time + ' with [' + guests +'] guests!\n\nThank you for choosing Oomori and see you soon!');

        // Reset the form
        document.getElementById('reservationForm').reset();

        // Close the form
        document.getElementById('popupForm').style.display = 'none';
    }
});
