document.addEventListener("DOMContentLoaded", function () {
    // Form submission for blood/organ requests
    const requestForm = document.getElementById("request-form");
    requestForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Fetch form values
        const patientName = document.getElementById("patient-name").value;
        const patientId = document.getElementById("patient-id").value;
        const bloodRequest = document.getElementById("blood-request").checked;
        const organRequest = document.getElementById("organ-request").checked;
        const details = document.getElementById("details").value;

        // Perform actions with the form data (you can customize this part)
        console.log("Form submitted:");
        console.log("Patient Name:", patientName);
        console.log("Patient ID:", patientId);
        console.log("Blood Request:", bloodRequest);
        console.log("Organ Request:", organRequest);
        console.log("Additional Details:", details);

        // You can further update the UI or send data to the server

        // Reset the form
        requestForm.reset();
    });

    // Form submission for posting updates
    const postUpdateForm = document.getElementById("post-update-form");
    postUpdateForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Fetch form values
        const comments = document.getElementById("comments").value;

        // Perform actions with the form data (you can customize this part)
        console.log("Update posted:");
        console.log("Comments:", comments);

        // You can further update the UI or send data to the server

        // Reset the form
        postUpdateForm.reset();
    });
});
