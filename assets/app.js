function selectDoctor(doctorId) {
    // Call your existing selectDoctor function logic here

    // Open the modal
    $('#appointmentModal').modal('show');
    
}
  
function closeModal() {
  // Set the display property to "none" using plain JavaScript
  $('#appointmentModal').modal('hide');
}


 


function selectdoctorName(doctorName) {
  // Update the "Doctor" field in the form
  // alert(doctorName);
  document.getElementById('docName').value = doctorName;
}


  document.addEventListener('DOMContentLoaded', function () {

    // Array to store booked dates
    const bookedDates = ["2023-12-01", "2023-12-05", "2023-12-10"];
  
    // Function to check if a date is available
    function isDateAvailable(selectedDate) {
      return !bookedDates.includes(selectedDate);
    }
  
    // Function to generate a random ticket number
    function generateTicketNumber() {
      return Math.floor(Math.random() * 100) + 1;
    }


    // Form submission
    document.getElementById('appointmentForm').addEventListener('submit', function (event) {
      event.preventDefault();

      // Gather user input
      const service = document.querySelector('input[name="doctor"]:checked').value;
      const date = document.getElementById('appointmentDate').value;
      const time = document.getElementById('appointmentTime').value;
      const fullName = document.getElementById('fullName').value;
      const contactNumber = document.getElementById('contactNumber').value;
      const addressLocation = document.getElementById('addressLocation').value;
      const message = document.getElementById('message').value;
    
      // Get the selected doctor's name based on the service
      let doctorName = '';
      if (service === 'doctor') {
        const selectedDoctorInput = document.querySelector('input[name="doctor"]:checked');
        doctorName = selectedDoctorInput ? selectedDoctorInput.value : '';
      }
    
      // Check if the selected date is available
      if (isDateAvailable(date)) {
        // Generate a random ticket number
        const ticketNumber = generateTicketNumber();
    
        // Add the booked date to the array
        bookedDates.push(date);
    
        // Display confirmation message with ticket number and doctor's name
        const confirmationMessage = `Ticket Number: ${ticketNumber}\nDoctor: ${service}\nDate: ${date}\nTime: ${time}\nName: ${fullName}\nContact: ${contactNumber}\nAddress: ${addressLocation}\nMessage: ${message}`;
        document.getElementById('confirmationMessage').innerText = confirmationMessage;
    
        // Show the confirmation section
        document.getElementById('userInformation').style.display = 'none';
        document.getElementById('confirmationSection').style.display = 'block';
      } else {
        // Display error message if the date is already booked
        alert('Sorry, the selected date is not available. Please choose another date.');
      }
  
      // Send email
      document.getElementById('sendEmail').addEventListener('click', function () {
        const subject = encodeURIComponent('Appointment Confirmation');
        const body = encodeURIComponent(document.getElementById('confirmationMessage').innerText);
        const emailLink = `mailto:akash.aubeeluck1@gmail.com?subject=${subject}&body=${body}`;
    
        // Create a temporary anchor element
        const tempAnchor = document.createElement('a');
    
        // Set the email link as the href
        tempAnchor.href = emailLink;
    
        // Set the target attribute to '_blank' to open in a new tab
        tempAnchor.target = '_blank';
    
        // Trigger a click on the anchor element
        tempAnchor.click();
    });
    
  
      document.getElementById('sendWhatsApp').addEventListener('click', function () {
        const phoneNumber = '58241274'; // Replace with the recipient's phone number
        const message = encodeURIComponent(document.getElementById('confirmationMessage').innerText);
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    
        // Create a temporary anchor element
        const tempAnchor = document.createElement('a');
        
        // Set the WhatsApp link as the href
        tempAnchor.href = whatsappLink;
        
        // Set the target attribute to '_blank' to open in a new tab
        tempAnchor.target = '_blank';
        
        // Trigger a click on the anchor element
        tempAnchor.click();
    });
    
  
    });
  
    // Set the min attribute for the date input to the current date
    document.getElementById('appointmentDate').min = new Date().toISOString().split('T')[0];
  
    // Add an event listener to the date input to prevent selecting past dates
    document.getElementById('appointmentDate').addEventListener('input', function () {
      const selectedDate = this.value;
      const currentDate = new Date().toISOString().split('T')[0];
  
      if (selectedDate < currentDate) {
        this.value = currentDate;
      }
    })
  
  });