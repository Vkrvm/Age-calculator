function calculateAge() {
    // Get the birthdate value from the input
    const birthDateInput = document.getElementById("birthDate").value;

    // Check if a valid date is entered
    if (!isValidDate(birthDateInput)) {
        alert("Please enter a valid birthdate in the format YYYY-MM-DD.");
        return;
    }

    // Convert the birthdate input to a Date object
    const birthDate = new Date(birthDateInput);

    // Check if the birthdate is in the future
    if (birthDate > new Date()) {
        alert("Please enter a birthdate that is not in the future.");
        return;
    }

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in days
    const ageInMilliseconds = currentDate - birthDate;
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

    // Calculate the age in years, weeks, and remaining days
    const ageInYears = Math.floor(ageInDays / 365);
    const remainingDays = ageInDays % 365;
    const ageInWeeks = Math.floor(remainingDays / 7);
    const finalDays = remainingDays % 7;

    // Display the result based on the age
    let resultMessage;
    if (ageInYears >= 1) {
        resultMessage = `
            Your age is:
            ${ageInYears} years,
            ${ageInWeeks} weeks, and
            ${finalDays} days.
        `;
    } else {
        resultMessage = `Your age is approximately ${ageInDays} days.`;
    }

    document.getElementById("result").innerHTML = resultMessage;
}

function isValidDate(dateString) {
    // Check if the input date string is in the format YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
}
