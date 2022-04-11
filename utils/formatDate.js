function formatDate(date) {

    const dateNow = !date ? new Date() : (isNumeric(date)  ? new Date(+date) : new Date(date));
    if (!dateNow) throw Error('Invalid Date');
    return {
        unix: Math.floor(dateNow.getTime()),
        utc: dateNow.toUTCString()
    }
}

function isNumeric(str) {
  if(typeof str !== 'string') return false;
  return !isNaN(str) && !isNaN(parseInt(str));
}
module.exports = formatDate;