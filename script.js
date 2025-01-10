// Add interactivity for the password field
const passwordField = document.getElementById('password');
const passwordHint = document.getElementById('password-hint');

passwordField.addEventListener('input', () => {
    if (passwordField.value.length < 6) {
        passwordHint.textContent = 'Password must be at least 6 characters.';
        passwordHint.style.color = 'red';
    } else {
        passwordHint.textContent = 'Password is strong enough.';
        passwordHint.style.color = 'green';
    }
});

// Display the selected country
const countrySelect = document.getElementById('country');
const countryOutput = document.getElementById('country-output');

countrySelect.addEventListener('change', () => {
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
    countryOutput.textContent = `You selected: ${selectedCountry}`;
});
