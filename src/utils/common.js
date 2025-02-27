function getGreeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Good Morning!';
  } else if (currentHour >= 12 && currentHour < 17) {
    return 'Good Afternoon!';
  } else if (currentHour >= 17 && currentHour < 21) {
    return 'Good Evening!';
  } else {
    return 'Good Night!';
  }
}

function convertDate(dateStr) {
  const date = new Date(dateStr);
  const options = {month: 'short', day: '2-digit', year: 'numeric'};
  return date.toLocaleDateString('en-US', options).replace(',', '');
}

const formatTo12Hour = time24 => {
  // Split the time into hours, minutes, and seconds
  const [hours, minutes, seconds] = time24.split(':').map(Number);

  // Determine the period (AM/PM)
  const period = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const hours12 = hours % 12 || 12; // If hours is 0 or 12, use 12

  // Return formatted string (without seconds, as it's optional)
  return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
};

const formatMonthYear = (year, month) => {
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  // Adjust month (1-based to 0-based index for array)
  const monthIndex = month - 1;
  
  // Validate month
  if (monthIndex < 0 || monthIndex > 11) {
    return 'Invalid Month';
  }

  return `${monthNames[monthIndex]} ${year}`;
};

export {getGreeting, convertDate, formatTo12Hour,formatMonthYear};
