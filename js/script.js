// script.js
$(document).ready(function () {
    const $usernameInput = $('#username');
    const $passwordInput = $('#password');
    const $confirmPasswordInput = $('#confirmPassword');
    const $termsCheckbox = $('#termsCheckbox');
    const $countrySelect = $('#country');
    const $submitButton = $('#submitButton');
    const $welcomeMessage = $('#welcomeMessage');
    const $registrationForm = $('#registrationForm');

    $.each(countries, function (index, country) {
        $countrySelect.append($('<option>', {
            value: country.code,
            text: country.name
        }));
    });

    const checkFormValidity = () => {
        const isUsernameValid = $usernameInput.val().trim() !== '';
        const isPasswordValid = $passwordInput.val().length >= 12; // Updated minimum password length
        const isConfirmPasswordValid = $confirmPasswordInput.val() === $passwordInput.val();
        const isTermsChecked = $termsCheckbox.prop('checked');
        const isCountrySelected = $countrySelect.val() !== '';

        return isUsernameValid && isPasswordValid && isConfirmPasswordValid && isTermsChecked && isCountrySelected;
    };

    const updateSubmitButton = () => {
        $submitButton.prop('disabled', !checkFormValidity());
    };

    // Event listeners for form inputs
    $usernameInput.on('input', updateSubmitButton);
    $passwordInput.on('input', updateSubmitButton);
    $confirmPasswordInput.on('input', updateSubmitButton);
    $termsCheckbox.on('change', updateSubmitButton);
    $countrySelect.on('change', updateSubmitButton);

    // Event listener for form submission
    $registrationForm.on('submit', function (event) {
        event.preventDefault();

        // Display welcome message
        $welcomeMessage.html(`Welcome ${$usernameInput.val()}! The country code you selected is ${$countrySelect.val()}`);
        $welcomeMessage.show();
    });
});
