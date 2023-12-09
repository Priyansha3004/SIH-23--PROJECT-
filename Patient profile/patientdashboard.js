document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for buttons
    document.getElementById('bookAppointment').addEventListener('click', function() {
        alert('Book Appointment button clicked!');
    });

    document.getElementById('orderMedicine').addEventListener('click', function() {
        alert('Order Medicine button clicked!');
    });

    // Event listeners for table rows
    var tableRows = document.querySelectorAll('.visit-history tbody tr, .doctor-details tbody tr, .medication tbody tr, .lab-reports tbody tr');
    tableRows.forEach(function(row) {
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ecf0f1'; // Light gray background on mouseover
        });

        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // Remove background color on mouseout
        });
    });

    // Event listener for scroll
    window.addEventListener('scroll', function() {
        console.log('Scrolled!');
    });
});
