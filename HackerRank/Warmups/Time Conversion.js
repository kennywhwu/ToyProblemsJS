// https://www.hackerrank.com/challenges/time-conversion

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

const convertMilitary = time => {
  let convertedTime = '',
    timeSplit = time.split(':');

  if (timeSplit[2][2] === 'P') {
    timeSplit[0] = parseInt(timeSplit[0]);
    if (timeSplit[0] !== 12) timeSplit[0] += 12;
  }

  if (timeSplit[2][2] === 'A') {
    if (parseInt(timeSplit[0]) === 12) timeSplit[0] = '00';
  }

  return timeSplit.join(':').slice(0, 8)
}
