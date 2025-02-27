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
  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  return date.toLocaleDateString('en-US', options).replace(',', '');
}

export {getGreeting,convertDate};
