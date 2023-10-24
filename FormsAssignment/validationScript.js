    // JavaScript code for form validation
    //function formValidator(unknownInput)
	// Prevent form from submitting

      // Retrieve the input field value
    let inputValue = document.getElementById("inputField").value
    //console.log(inputValue)
      // Regular expression pattern for alphanumeric input
      let regexp = /^[a-zA-Z0-9]*$/;
      let isValid = regexp.test(inputValue)
      console.log(isValid)
    document.getElementById("myForm").addEventListener('submit', function(){
      if (!isValid) {
        alert("Input must be alphanumeric");
        event.preventDefault();
      }
      else {
        alert("Input is valid. Submission Successful")
      }
    })
      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message