function date() {
    let d = new Date();
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${ye}-${mo}-${da}`;
}

function url() {
    return url = `https://www.crunchyroll.com/simulcastcalendar?filter=premium&date=`;
}

module.exports = { date, url }
