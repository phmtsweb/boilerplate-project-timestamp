function formatDate(date) {

    const dateNow = !date ? new Date() : (isNumeric(date)  ? new Date(+date) : new Date(date));
    const [unix, utc] = [dateNow.getTime(), dateNow.toUTCString()];
    if(!unix) throw Error('Invalid Date');
    return {
        unix,
        utc
    }
}

function isNumeric(str) {
  if(typeof str !== 'string') return false;
  return !isNaN(str) && !isNaN(parseInt(str));
}
module.exports = formatDate;