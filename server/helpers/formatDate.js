function pad(num) {
  return ('00' + num).slice(-2);
}

// Change the date to SQL date format
module.exports = function formatDate(date) {
  let dateStr =
    date.getUTCFullYear() +
    '-' +
    pad(date.getUTCMonth() + 1) +
    '-' +
    pad(date.getUTCDate() + 1);
  return dateStr;
};
