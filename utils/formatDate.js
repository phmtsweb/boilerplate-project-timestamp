function formatDate(date) {

    const dateNow = !date ? new Date() : (date.indexOf('-') !== -1 ? new Date(date) : new Date(+date));
    if (!dateNow) throw Error('Invalid Date');
    return {
        unix: Math.floor(dateNow.getTime() / 1000),
        utc: dateNow
    }
}

module.exports = formatDate;