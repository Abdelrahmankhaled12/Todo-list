export function formatDate(inputDate) {
    // Parse the input date string
    const dateParts = inputDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    // Create a Date object
    const date = new Date(year, month - 1, day); 
    // Format the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Add the ordinal suffix to the day
    const dayWithSuffix = addOrdinalSuffix(day);

    // Construct the final formatted string
    const finalFormattedDate = `${dayWithSuffix} ${formattedDate}`;

    return finalFormattedDate;
}

// Function to add ordinal suffix to the day
function addOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
        return day + "th";
    } else {
        const lastDigit = day % 10;
        switch (lastDigit) {
            case 1:
                return day + "st";
            case 2:
                return day + "nd";
            case 3:
                return day + "rd";
            default:
                return day + "th";
        }
    }
}

