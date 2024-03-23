document.addEventListener('DOMContentLoaded', function() {
    // Select the button element
    var button = document.getElementById('input-test');
    
    // Select the feedback paragraph element
    var feedback = document.getElementById('feedback');
    
    // Add event listener to the button
    button.addEventListener('click', function() {
        /* // Get the input values
        var name = document.getElementById('input-nama').value;
        var email = document.getElementById('input-email').value;
        var message = document.getElementById('input-pesan').value;
         */
        // Construct the message to be displayed
        var feedbackMessage = "Pesan terkirim!";
        
        // Update the content of the feedback paragraph
        feedback.innerHTML = feedbackMessage;
    });
});
