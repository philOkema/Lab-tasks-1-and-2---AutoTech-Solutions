// JavaScript for form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let mobileNumber = document.getElementById('mobileNumber').value;
    let appointmentDate = document.getElementById('appointmentDate').value;
    let message = document.getElementById('message').value;

    // Basic form validation
    if (fullName === '' || email === '' || mobileNumber === '' || appointmentDate === '' || message === '') {
        alert('Please fill in all required fields.');
        event.preventDefault(); // Prevent form submission
    } else {
        alert('Form submitted successfully!');
    }
});
