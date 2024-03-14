function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    
    let regex = /^pet_(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/;// Regular expression to match the desired syntax - the ?=.* & .*\d are positive lookahead assertions according to having 1 number or at least 1 letter after pet_

    // Checking if the input matches the regex pattern - .test() should return true or false accordingly
        if (regex.test(input)) {
        result = 'Valid Syntax';
    } else {
        result = 'Invalid Syntax';
    }
    
    // Check if input starts with 'pet_' and followed by alphanumeric characters
        document.getElementById('result').innerText = result;
}
